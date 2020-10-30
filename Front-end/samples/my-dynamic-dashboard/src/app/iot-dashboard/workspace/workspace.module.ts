import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceContainerComponent } from './workspace-container/workspace-container.component';
import { WorkspaceComponent } from 'projects/shared-widgets/src/lib/workspace/workspace.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkspaceComponent, WorkspaceContainerComponent],
  entryComponents: [ WorkspaceContainerComponent ]
})
export class WorkspaceModule {
  static entryComponents = {WorkspaceContainerComponent};
 }
