import { Injectable, OnDestroy } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppSettings, TokenItem } from '../models';
import { StorageQuery } from '../app-states/queries/storage.query';

export { User };

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  constructor(private http: HttpClient) {}
  userManager: UserManager;
  settings: UserManagerSettings;
  user: User;

  public static logout() {
    StorageQuery.deleteToken();
    window.location.replace('login');
  }

  public static IsFormAuthentication(): boolean {
    return AppSettings.loginType === 'form';
  }

  public applySettings() {
    this.settings = {
      authority: AppSettings.stsAuthority,
      client_id: AppSettings.clientId,
      automaticSilentRenew: true,
      redirect_uri: `${AppSettings.clientRoot}auth-callback`,
      silent_redirect_uri: `${AppSettings.clientRoot}auth-silent-callback`,
      post_logout_redirect_uri: `${AppSettings.clientRoot}`,
      response_type: 'id_token token',
      scope: AppSettings.clientScope,
      acr_values: 'idp:Windows',
      filterProtocolClaims: true,
      loadUserInfo: false,
    };
    this.userManager = new UserManager(this.settings);
    this.userManager.events.addUserSignedOut(() => {
      this.userManager
        .signoutRedirect()
        .then(() => {
          console.log('Success');
        })
        .catch((err) => {
          console.log(err);
        });
    });

    this.userManager.events.addSilentRenewError((tokenRenewError: any) => {
      console.log({ tokenRenewError });
    });

    this.userManager.events.addUserLoaded(() => {
      this.userManager.getUser().then((value: User) => {
        this.user = value;
      });
    });
  }

  public getUser(): Promise<User> {
    return this.userManager.getUser();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public async completeAuthentication() {
    this.user = await this.userManager.signinRedirectCallback();
    window.location.href = sessionStorage.getItem('initialPath');
  }

  public formLogin(userName: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', AppSettings.clientId);
    body.set('client_secret', AppSettings.clientSecret);
    body.set('username', userName);
    body.set('password', password);
    body.set('scope', AppSettings.clientScope);

    return this.http.post<any>(
      `${AppSettings.stsAuthority}/connect/token`,
      body.toString(),
      httpOptions
    );
  }

  private redirectToLoginForm() {
    if (AppSettings.loginType === 'form') {
      StorageQuery.deleteToken();
      window.location.href = `${AppSettings.clientRoot}login`;
    }
  }

  private setTimeOutTokenFormLogin() {
    const tokenItem = StorageQuery.getAccessToken();
    const expireDate = tokenItem.expireDate;
    const currentDate = new Date().valueOf();
    const secondsExpire = expireDate - currentDate;
    setInterval(this.redirectToLoginForm, secondsExpire);
  }
  public setTimeoutForToken() {
    this.setTimeOutTokenFormLogin();
  }

  private getTokenItem(loginResponse: any): TokenItem {
    const date = new Date();
    date.setSeconds(date.getSeconds() + loginResponse.expires_in);
    return new TokenItem(loginResponse.access_token, date.valueOf());
  }

  public completeFormAuthentication(loginResponse: any) {
    const tokenItem = this.getTokenItem(loginResponse);
    StorageQuery.setAccessToken(tokenItem);
    window.location.href = sessionStorage.getItem('initialPath');
  }

  public getAccessToken(): string {
    if (AppSettings.loginType === 'form') {
      const tokenItem = StorageQuery.getAccessToken();
      if (tokenItem === null) {
        return '';
      }
      const isExpired = !(tokenItem.expireDate >= new Date().valueOf());
      return !isExpired ? tokenItem.token : '';
    } else if (AppSettings.loginType === 'windows') {
      return this.user ? this.user.access_token : '';
    }
    return '';
  }

  public isAuthenticated() {
    const accessToken = this.getAccessToken();
    return (
      accessToken !== null &&
      accessToken !== undefined &&
      accessToken.length > 0
    );
  }

  ngOnDestroy() {}
}

