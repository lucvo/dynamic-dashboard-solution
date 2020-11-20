import { ChangeDetectorRef, Compiler, Component, Inject, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, DYNAMIC_MODULES_MAP, IMappedModules, BaseLayoutComponent } from 'dynamic-core';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent extends BaseLayoutComponent {

  constructor(cd: ChangeDetectorRef,
              injector: Injector,
              compiler: Compiler,
              dashboardService: DashboardService,
              route: ActivatedRoute,
              @Inject(DYNAMIC_MODULES_MAP) modulesMap: IMappedModules) {
    super(cd, injector, compiler, dashboardService, route, modulesMap);
  }

}
