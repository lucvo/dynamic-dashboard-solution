import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceModule } from './workspace/workspace.module';
import { ReportModule } from './report/report.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BaseSettingsService, DynamicLayoutModule, DYNAMIC_MODULES_MAP } from 'dynamic-core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContainerMapper } from './dashboard-container.map';
import { DashboardSettingsService } from './services/dashboard-settings.service';

@NgModule({
  imports: [
    CommonModule, WorkspaceModule, ReportModule, DashboardRoutingModule, DynamicLayoutModule
  ],
  declarations:  [ DashboardComponent ],
  providers: [
    {
      provide: BaseSettingsService, useClass: DashboardSettingsService
    },
    {
      provide: DYNAMIC_MODULES_MAP, useFactory: () => DashboardContainerMapper
    }
  ],
})
export class IotDashboardModule { }
