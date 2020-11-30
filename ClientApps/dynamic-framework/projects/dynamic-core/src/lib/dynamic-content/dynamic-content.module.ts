import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContentDirective } from './dynamic-content.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicContentDirective
   ]
})
export class DynamicContentModule { }
