import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { LayoutComponent } from './master-layout/layout.component';
import { LayoutOutletDirective } from './layout-outlet.directive';
import { TemplateCardComponent } from './template-card/template-card.component';
import { TemplateCardContainer } from './template-card/template-card.container';

@NgModule({
  declarations: [BaseLayoutComponent, LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer],
  imports: [CommonModule],
  exports: [BaseLayoutComponent, LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer]
})
export class DynamicLayoutModule { }
