import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})
export class ConfigurationModule {
}
