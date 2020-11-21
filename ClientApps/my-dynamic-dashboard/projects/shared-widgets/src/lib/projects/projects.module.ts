import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [ProjectComponent, ProjectsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectComponent, ProjectsComponent]
})
export class ProjectsModule { }
