import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutOutletDirective } from './layout-outlet.directive';
import { TemplateCardComponent } from './template-card/template-card.component';
import { TemplateCardContainer } from './template-card/template-card.container';
import { LayoutComponent } from './master-layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, LayoutOutletDirective, TemplateCardComponent, TemplateCardContainer],
  imports: [CommonModule],
  exports: [LayoutComponent]
})
export class DynamicLayoutModule {}
