import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyAuthorizationComponent } from './my-authorization/my-authorization.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HelloWorldComponent, MyAuthorizationComponent],
  imports: [
    CommonModule
  ],
  exports: [HelloWorldComponent, MyAuthorizationComponent]
})
export class LibDashboardWidgetsModule { }
