import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceContainerComponent } from './workspace-container.component';
import { WorkspaceComponent } from '../../shared-widgets/workspace/workspace.component';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    ToastModule,
    ButtonModule
  ],
  declarations: [WorkspaceComponent, WorkspaceContainerComponent],
  entryComponents: [ WorkspaceContainerComponent ]
})
export class WorkspaceModule {
  static entryComponents = {WorkspaceContainerComponent};
 }
