import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceContainerComponent } from './workspace-container.component';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { SharedWidgetsModule } from 'projects/shared-widgets/src/lib/shared-widgets.module';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    SharedWidgetsModule
  ],
  declarations: [ WorkspaceContainerComponent],
  entryComponents: [ WorkspaceContainerComponent ]
})
export class WorkspaceModule {
  static entryComponents = {WorkspaceContainerComponent};
 }
