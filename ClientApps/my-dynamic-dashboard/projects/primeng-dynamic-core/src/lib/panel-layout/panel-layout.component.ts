import { ChangeDetectorRef, Compiler, Component, Inject, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, DYNAMIC_MODULES_MAP, IMappedModules, BaseLayoutComponent } from 'dynamic-core';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
})
export class PanelLayoutComponent extends BaseLayoutComponent {

  constructor(cd: ChangeDetectorRef,
              injector: Injector,
              compiler: Compiler,
              dashboardService: DashboardService,
              route: ActivatedRoute,
              @Inject(DYNAMIC_MODULES_MAP) modulesMap: IMappedModules) {
    super(cd, injector, compiler, dashboardService, route, modulesMap);
  }
}
