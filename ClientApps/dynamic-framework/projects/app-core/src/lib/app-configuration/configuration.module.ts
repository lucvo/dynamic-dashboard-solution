import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Authenticate, AuthService, AuthGuard } from '../api-auth';
import { CoreInterceptor } from '../interceptors/core.interceptor';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: Authenticate,
      deps: [ConfigurationService, AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true
    },
  ]
})
export class ConfigurationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigurationModule,
      providers: [AuthGuard, AuthService, ConfigurationService]
    };
  }

  constructor() { }
}
