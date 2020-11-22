import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportContainerComponent } from './report-container.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SharedWidgetsModule } from 'projects/shared-widgets/src/lib/shared-widgets.module';
@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    SharedWidgetsModule
  ],
  declarations: [
    ReportContainerComponent,
  ],
  entryComponents: [ReportContainerComponent]

})
export class ReportModule {
  static entryComponents = {ReportContainerComponent};
 }
