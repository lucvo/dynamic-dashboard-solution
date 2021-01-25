import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { AppSetting, AppSettingService } from '../appSetting';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export { User };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userManager: UserManager;
  settings: UserManagerSettings;
  user: User;
  logged: Observable<boolean>;
  isFormAuthentication: Observable<boolean>;
  constructor(private settingService: AppSettingService) {
      this.settingService.appSettings.pipe(map((setting)=>{
        this.applySettings(setting);
      }));
    }

  public static logout() {
    window.location.replace('login');
  }
  public applySettings(config: AppSetting) {
    this.settings = {
      authority: config.stsAuthority,
      client_id: config.clientId,
      automaticSilentRenew: true,
      redirect_uri: `${config.clientRoot}auth-callback`,
      silent_redirect_uri: `${config.clientRoot}auth-silent-callback`,
      post_logout_redirect_uri: `${config.clientRoot}`,
      response_type: 'id_token token',
      scope: config.clientScope,
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
          console.error(err);
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

}

