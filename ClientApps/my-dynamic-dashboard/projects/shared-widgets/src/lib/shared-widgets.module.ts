import { NgModule } from '@angular/core';
import { UsageInsightsComponent } from './usage-insights/usage-insights.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';



@NgModule({
  declarations: [UsageInsightsComponent, WorkspaceComponent, BookingHistoryComponent, TemperaturesComponent],
  imports: [],
  exports: [UsageInsightsComponent, WorkspaceComponent, BookingHistoryComponent, TemperaturesComponent]
})
export class SharedWidgetsModule { }
