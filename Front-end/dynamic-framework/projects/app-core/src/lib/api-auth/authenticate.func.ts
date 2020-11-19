import { AuthService, User } from '.';
import { ConfigurationService } from '../app-configuration';
import { AppSettings } from '../models';

export function Authenticate(
  configService: ConfigurationService,
  authService: AuthService
) {
  if (location.pathname.indexOf('login') >= 0) {
    return () => {
      configService.load().subscribe(() => {
        if (authService.isAuthenticated()) {
          window.location.href = AppSettings.clientRoot;
        }
        return;
      });
    };
  }
  return () => new Promise<User>((resolve, reject) => {
    if (location.pathname.indexOf('callback') < 0) {
      sessionStorage.setItem('initialPath', location.pathname);
    }

    configService.load().subscribe(() => {
      if (AppSettings.loginType === 'form') {
        if (!authService.isAuthenticated()) {
          window.location.href = AppSettings.clientRoot + 'login';
        } else {
          authService.setTimeoutForToken();
          resolve();
        }
      }
    });
  });
}
