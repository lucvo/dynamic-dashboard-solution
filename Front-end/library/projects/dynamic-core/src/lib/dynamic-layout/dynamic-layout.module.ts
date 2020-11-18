import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer, BaseLayoutComponent } from '.';

@NgModule({
  declarations: [BaseLayoutComponent, LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer],
  imports: [CommonModule],
  exports: [BaseLayoutComponent, LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer]
})
export class DynamicLayoutModule { }
