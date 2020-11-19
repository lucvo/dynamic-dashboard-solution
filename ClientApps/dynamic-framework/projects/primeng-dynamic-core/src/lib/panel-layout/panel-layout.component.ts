import { ChangeDetectorRef, Compiler, Component, Inject, Injector } from '@angular/core';
import { DashboardService, DYNAMIC_MODULES_MAP, IMappedModules, BaseLayoutComponent } from 'dynamic-core';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent extends BaseLayoutComponent {

  constructor(cd: ChangeDetectorRef,
              injector: Injector,
              compiler: Compiler,
              dashboardService: DashboardService,
              @Inject(DYNAMIC_MODULES_MAP) modulesMap: IMappedModules) {
    super(cd, injector, compiler, dashboardService, modulesMap);
  }
}
