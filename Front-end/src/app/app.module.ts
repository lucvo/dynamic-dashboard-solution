import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseSettingsService } from '@dashboard-core/base-settings.service';
import { HomeSettingsService } from './home/home-settings.service';
import { DYNAMIC_MODULES_MAP } from '@dashboard-core/dynamic-modules.map';
import { dynamicMap } from './home/home-module.map';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicLayoutModule } from '@dashboard-core/dynamic-layout/dynamic-layout.module';

@NgModule({
  declarations: [	AppComponent, HomeComponent],
  imports: [
    BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, DynamicLayoutModule
  ],
  providers: [
    {
      provide: BaseSettingsService, useClass: HomeSettingsService
    },
    {
      provide: DYNAMIC_MODULES_MAP, useFactory: () => dynamicMap
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
