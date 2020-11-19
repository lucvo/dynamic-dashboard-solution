import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseSettingsService {

  abstract loadSettings(param: any): any;

}
