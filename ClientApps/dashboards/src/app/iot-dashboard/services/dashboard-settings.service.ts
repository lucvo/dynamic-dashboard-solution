import { Injectable } from '@angular/core';
import { BaseSettingsService, LayoutContent } from 'dynamic-core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardSettingsService implements BaseSettingsService {
  loadSettings(): Observable<any[]> {
    console.log('call dashboard setting service');
    return of([{
      items: [
        {
          name: 'workspace',
          cName: 'Workspace',
          title: "Workspace",
          id: '1',
        },
        {
          name: 'reports',
          cName: 'Report',
          title: "report",
          id: '2',
        },
      ],
    }
  ]);
  }

}
