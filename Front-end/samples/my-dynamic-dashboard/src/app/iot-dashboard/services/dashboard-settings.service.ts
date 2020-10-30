import { Injectable } from '@angular/core';
import { BaseSettingsService } from 'dynamic-core';

@Injectable({
  providedIn: 'root'
})
export class DashboardSettingsService implements BaseSettingsService {

  constructor() { }
  loadSettings(): any {
    console.log('call dashboard setting service');
    return [{
      items: [
        {
          name: 'workspace',
          component: 'Workspace',
          id: '1',
        }
      ],
    },
    {
      items: [
        {
          name: 'reports',
          component: 'Report',
          id: '2',
        },
      ],
    }
  ];
  }

}
