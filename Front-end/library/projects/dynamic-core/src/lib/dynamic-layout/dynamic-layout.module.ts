import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer } from '.';

@NgModule({
  declarations: [LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer],
  imports: [CommonModule],
  exports: [LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer]
})
export class DynamicLayoutModule { }
