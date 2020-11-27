import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { ActivityFeedComponent } from './activity-feed.component';



@NgModule({
  declarations: [ActivityComponent, ActivityFeedComponent],
  imports: [
    CommonModule
  ],
  exports:  [ActivityComponent, ActivityFeedComponent]
})
export class ActivityFeedModule { }
