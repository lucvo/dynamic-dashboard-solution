import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportContainerComponent } from './report-container.component';
import { BookingHistoryComponent } from '../../shared-widgets/booking-history/booking-history.component';
import { TemperaturesComponent } from '../../shared-widgets/temperatures/temperatures.component';
import { UsageInsightsComponent } from '../../shared-widgets/usage-insights/usage-insights.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PanelModule
  ],
  declarations: [
    ReportContainerComponent, 
    BookingHistoryComponent, 
    TemperaturesComponent, 
    UsageInsightsComponent
  ],
  entryComponents: [ReportContainerComponent]

})
export class ReportModule {
  static entryComponents = {ReportContainerComponent};
 }
