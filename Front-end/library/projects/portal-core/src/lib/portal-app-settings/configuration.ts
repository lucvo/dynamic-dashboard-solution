export interface ApplicationInfo {
  applicationId: string;
  clientId: string;
  clientSecret: string;
  clientScope: string;
  stsAuthority: string;
  rootApiUrl: string;
  loginType: string;
  version: string;
  releaseDate: string;
  copyRight: string;
}

export class AppSettings {
  public static loginType = '';
  public static version = '';
  public static releaseDate = '';
  public static applicationId = '';
  public static stsAuthority = '';
  public static clientId = '';
  public static clientSecret = '';
  public static clientRoot = window.location.origin + '/';
  public static clientScope = '';
  public static rootApiUrl: string;
  public static copyRight = '';

}