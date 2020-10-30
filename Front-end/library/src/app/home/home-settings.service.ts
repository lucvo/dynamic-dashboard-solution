import { Injectable, Component } from '@angular/core';
import { BaseSettingsService } from '@dashboard-core/services/base-settings.service';

@Injectable({
  providedIn: 'root'
})
export class HomeSettingsService implements BaseSettingsService {
  loadSettings(): any {
    //

    return [{
        items: [
          {
            name: 'hello',
            component: 'HelloWorld',
            id: '1',
          },
          {
            name: 'authorization',
            component: 'MyAuthorization',
            id: '3',
          }
        ],
      },
      {
        items: [
          {
            name: 'hello',
            component: 'HelloWorldThree',
            id: '2',
          },
        ],
      },
      // {
      //   items: [
      //     {
      //       name: 'authorization',
      //       component: 'MyAuthorization',
      //       id: '3',
      //     },
      //   ],
      // }
    ];
  }

}
