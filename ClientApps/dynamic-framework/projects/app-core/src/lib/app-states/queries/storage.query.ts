import { TokenItem, AppSettings } from '../../models';

export class StorageQuery {
  constructor() { }

  private static accessTokenKey: string = `form_access_token_key`;
  private static userDefaultEmail: string = `user_default_email`;

  public static getAccessToken(): TokenItem {
    const storageToken = localStorage.getItem(`${AppSettings.clientRoot}.${this.accessTokenKey}`);
    if (storageToken === null || storageToken === undefined) {
      return null;
    }
    const tokenJson = JSON.parse(storageToken);
    // tslint:disable-next-line: radix
    return new TokenItem(tokenJson.token, Number.parseInt(tokenJson.expireDate));
  }

  public static setAccessToken(token: TokenItem) {
    localStorage.setItem(`${AppSettings.clientRoot}.${this.accessTokenKey}`, JSON.stringify(token));
  }

  public static deleteToken() {
    localStorage.removeItem(`${AppSettings.clientRoot}.${this.accessTokenKey}`);
  }

  public static getLoginDefaultEmail(): string {
    const storageEmail = localStorage.getItem(`${AppSettings.clientRoot}.${this.userDefaultEmail}`);
    if (storageEmail === null || storageEmail === undefined) { return null; }
    return storageEmail;
  }

  public static setLoginDefaultEmail(emailString: string) {
    localStorage.setItem(`${AppSettings.clientRoot}.${this.userDefaultEmail}`, emailString);
  }
}
