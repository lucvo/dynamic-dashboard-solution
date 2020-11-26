import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from './configuration';
import { AppSettings } from '../models/AppSettings';
import { tap } from 'rxjs/operators';
import { AuthService } from '../api-auth';

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  load() {
    return this.http.get('/api/settings').pipe(
      tap(
        (config: Configuration) => {
          AppSettings.stsAuthority = config.stsAuthority;
          AppSettings.clientId = config.clientId;
          AppSettings.clientRoot = window.location.origin + '/';
          AppSettings.clientScope = config.clientScope;
          AppSettings.rootApiUrl = config.rootApiUrl;
          AppSettings.loginType = config.loginType;
          AppSettings.clientSecret = config.clientSecret;

          this.authService.applySettings();
        }));
  }
}
