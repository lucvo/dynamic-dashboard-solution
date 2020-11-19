import { Injectable } from '@angular/core';
import { BaseSettingsService, LayoutContent } from 'dynamic-core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardSettingsService implements BaseSettingsService {

  constructor() { }
  loadSettings(): Observable<any[]> {
    console.log('call dashboard setting service');
    return of([{
      items: [
        {
          name: 'workspace',
          component: 'Workspace',
          id: '1',
        },
        {
          name: 'reports',
          component: 'Report',
          id: '2',
        },
      ],
    }
  ]);
  }

}
