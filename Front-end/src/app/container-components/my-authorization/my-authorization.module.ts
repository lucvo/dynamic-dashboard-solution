import { NgModule } from '@angular/core';
import { MyAuthorizationContainerComponent } from './my-authorization.container';
import { CommonModule } from '@angular/common';
import { MyAuthorizationComponent } from '@dashboard-widgets/my-authorization/my-authorization.component';

@NgModule({
    declarations: [MyAuthorizationComponent, MyAuthorizationContainerComponent],
    imports: [CommonModule],
    entryComponents: [MyAuthorizationContainerComponent]
  })
export class MyAuthorizationModule {
  static entryComponents = {MyAuthorizationContainerComponent};
}
