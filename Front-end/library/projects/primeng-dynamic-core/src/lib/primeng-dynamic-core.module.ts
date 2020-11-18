import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicLayoutModule } from 'dynamic-core';
import { TabViewModule } from 'primeng/tabview';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [TabLayoutComponent, PanelLayoutComponent],
  imports: [
    CommonModule, DynamicLayoutModule, TabViewModule, PanelModule
  ],
  exports: [TabLayoutComponent, PanelLayoutComponent, DynamicLayoutModule]
})
export class PrimeDynamicCoreModule { }
