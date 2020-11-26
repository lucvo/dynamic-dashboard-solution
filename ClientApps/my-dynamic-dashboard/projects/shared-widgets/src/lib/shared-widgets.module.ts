import { NgModule } from '@angular/core';
import { UsageInsightsComponent } from './usage-insights/usage-insights.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';
import { CommonModule } from '@angular/common';
import { MessagesModule } from './messages/messages.module';
import { ProjectsModule } from './projects/projects.module';
import { BookingHistoryModule } from './booking-history/booking-history.module';
import { ActivityFeedModule } from './activity-feed/activity-feed.module';
@NgModule({
  declarations: [
    UsageInsightsComponent, WorkspaceComponent, TemperaturesComponent],
  imports: [
    CommonModule,
    MessagesModule, ProjectsModule, BookingHistoryModule, ActivityFeedModule
  ],
  exports: [UsageInsightsComponent, WorkspaceComponent, TemperaturesComponent, MessagesModule,
    ProjectsModule, BookingHistoryModule, ActivityFeedModule]
})
export class SharedWidgetsModule { }
