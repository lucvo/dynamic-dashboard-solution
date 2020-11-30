import {
  Component, ChangeDetectorRef,
  Compiler, Injector, Inject
} from '@angular/core';

import { DashboardService } from '../dynamic-layout.service';
import { IMappedModules, DYNAMIC_MODULES_MAP } from '../mapped-modules.interface';
import { BaseLayoutComponent } from '../dynamic-layout.component.base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends BaseLayoutComponent {
  constructor(
    cd: ChangeDetectorRef,
    injector: Injector,
    compiler: Compiler,
    dashboardService: DashboardService,
    route: ActivatedRoute,
    @Inject(DYNAMIC_MODULES_MAP) modulesMap: IMappedModules
  ) {
    super(cd, injector, compiler, dashboardService, route, modulesMap);
  }
}


