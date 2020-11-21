import { NgModule } from '@angular/core';
import { UsageInsightsComponent } from './usage-insights/usage-insights.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  declarations: [UsageInsightsComponent, WorkspaceComponent, BookingHistoryComponent, TemperaturesComponent],
  imports: [
    InputTextModule,
    DropdownModule,
    InputTextareaModule
  ],
  exports: [UsageInsightsComponent, WorkspaceComponent, BookingHistoryComponent, TemperaturesComponent]
})
export class SharedWidgetsModule { }
