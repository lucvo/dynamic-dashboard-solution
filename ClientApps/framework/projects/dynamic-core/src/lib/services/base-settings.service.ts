import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseSettingsService {
  abstract loadSettings(param: any): Observable<any>;
}
