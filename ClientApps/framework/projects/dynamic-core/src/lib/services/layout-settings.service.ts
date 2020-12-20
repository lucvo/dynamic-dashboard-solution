import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class LayoutSettingsService {
  abstract loadSettings(param: any): Observable<any>;
}
