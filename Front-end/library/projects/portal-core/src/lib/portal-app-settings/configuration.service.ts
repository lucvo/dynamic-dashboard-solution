import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings, ApplicationInfo } from './configuration';
import { tap } from 'rxjs/operators';

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get('/api/settings').pipe(
      tap(
        (config: ApplicationInfo) => {
          AppSettings.stsAuthority = config.stsAuthority;
          AppSettings.clientId = config.clientId;
          AppSettings.clientRoot = window.location.origin + '/';
          AppSettings.clientScope = config.clientScope;
          AppSettings.rootApiUrl = config.rootApiUrl;
          AppSettings.loginType = config.loginType;
          AppSettings.clientSecret = config.clientSecret;
        }));
  }
}
