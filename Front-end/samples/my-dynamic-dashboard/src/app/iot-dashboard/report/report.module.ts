import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportContainerComponent } from './report-container/report-container.component';
import { BookingHistoryComponent } from 'projects/shared-widgets/src/lib/booking-history/booking-history.component';
import { TemperaturesComponent } from 'projects/shared-widgets/src/lib/temperatures/temperatures.component';
import { UsageInsightsComponent } from 'projects/shared-widgets/src/lib/usage-insights/usage-insights.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReportContainerComponent
  ],
  entryComponents: [ReportContainerComponent]

})
export class ReportModule {
  static entryComponents = {ReportContainerComponent};
 }
