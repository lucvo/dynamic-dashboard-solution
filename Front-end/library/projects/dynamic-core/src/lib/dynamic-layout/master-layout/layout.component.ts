import {
  Component, OnInit, ViewChildren,
  QueryList, ChangeDetectorRef,
  AfterViewInit, Compiler, NgModuleFactory, Injector
} from '@angular/core';

import { tap } from 'rxjs/operators';

import { LayoutOutletDirective } from '../layout-outlet.directive';
import { Item, LayoutContent } from '../../models';
import { DashboardService } from '../dynamic-layout.service';
import { IMappedModules, DynamicModuleType, DYNAMIC_MODULES_MAP } from '../mapped-modules.interface';
import { Inject } from '@angular/core';
import { TemplateCardContainer } from '../template-card/template-card.container';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChildren(LayoutOutletDirective) dashboardOutlet: QueryList<LayoutOutletDirective>;

  contents: Array<LayoutContent> = [];
  constructor(
    private cd: ChangeDetectorRef,
    private injector: Injector,
    private compiler: Compiler,
    private dashboardService: DashboardService,
    @Inject(DYNAMIC_MODULES_MAP) private modulesMap: IMappedModules
  ) {}

  ngOnInit(): void{
    this.dashboardService.contents$
      .pipe(
        tap(tracks => (this.contents = tracks))
        /* Make sure to unsubscribe! */
      )
      .subscribe(() => {
        this.cd.detectChanges();
        this.loadContents();
      });
  }

  ngAfterViewInit(): void {
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }
    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  }

  loadContent = async (template: LayoutOutletDirective, item: Item) => {
    if (!item.name) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const moduleOrFactory = await this.modulesMap[item.name].load();
    let moduleFactory;
    if (moduleOrFactory instanceof NgModuleFactory) {
      moduleFactory = moduleOrFactory;                // AOT
    } else {
      moduleFactory =  await this.compiler.compileModuleAsync(moduleOrFactory);   // JIT
    }
    const moduleRef = moduleFactory.create(this.injector);
    const rootComponent = (moduleFactory.moduleType as DynamicModuleType).entryComponents[`${item.component}ContainerComponent`];
    const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
    const componentRef = viewContainerRef.createComponent(factory);
    const instance = componentRef.instance as TemplateCardContainer;
    instance.item = item;
  }

  changed = (items: Array<Item>, trackIndex: number) => {
    const state = this.contents;
    state[trackIndex].items = items as Array<Item>;
    this.dashboardService.setState(state);
  }
}
