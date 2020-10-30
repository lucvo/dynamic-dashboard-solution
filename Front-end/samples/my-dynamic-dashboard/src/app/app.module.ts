import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IotDashboardModule } from './iot-dashboard/iot-dashboard.module';
import { BaseSettingsService, DYNAMIC_MODULES_MAP } from 'dynamic-core';
import { DashboardContainerMapper } from './iot-dashboard/dashboard-container.map';
import { DashboardSettingsService } from './iot-dashboard/services/dashboard-settings.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AppRoutingModule, IotDashboardModule
  ],
  providers: [
    {
      provide: BaseSettingsService, useClass: DashboardSettingsService
    },
    {
      provide: DYNAMIC_MODULES_MAP, useFactory: () => DashboardContainerMapper
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
