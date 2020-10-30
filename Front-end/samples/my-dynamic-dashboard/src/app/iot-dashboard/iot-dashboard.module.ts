import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceModule } from './workspace/workspace.module';
import { ReportModule } from './report/report.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DynamicLayoutModule, LayoutComponent } from 'dynamic-core';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule, WorkspaceModule, ReportModule, DashboardRoutingModule, DynamicLayoutModule
  ],
  declarations:  [ DashboardComponent ],
  
})
export class IotDashboardModule { }
