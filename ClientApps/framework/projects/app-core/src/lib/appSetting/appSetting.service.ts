import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from './appSetting';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AppSettingService {
  private _appSettings: BehaviorSubject<AppSetting> = new BehaviorSubject<AppSetting>(null);
  public readonly appSettings: Observable<AppSetting> = this._appSettings.asObservable();
  constructor(private http: HttpClient) { 
    this.load();
  }

  load() {
    return this.http.get('/api/settings').pipe(
      tap(
        (setting: AppSetting) => {
          this._appSettings.next(setting);
        }));
  }
}
