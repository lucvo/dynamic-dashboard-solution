import {
  Component, OnInit, ViewChildren,
  QueryList, ChangeDetectorRef,
  AfterViewInit, Compiler, NgModuleFactory, Injector, Inject
} from '@angular/core';

import { DashboardService } from '../dynamic-layout.service';
import { IMappedModules, DynamicModuleType, DYNAMIC_MODULES_MAP } from '../mapped-modules.interface';
import { BaseLayoutComponent } from '../BaseLayoutComponent';

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
    @Inject(DYNAMIC_MODULES_MAP) modulesMap: IMappedModules
  ) {
    super(cd, injector, compiler, dashboardService, modulesMap);
  }
}


