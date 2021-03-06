import {
  OnInit, ViewChildren,
  QueryList, ChangeDetectorRef,
  AfterViewInit, Compiler, NgModuleFactory, Injector, Inject, Component
} from '@angular/core';
import { tap } from 'rxjs/operators';
import { LayoutOutletDirective } from './layout-outlet.directive';
import { PageSetting, LayoutContent } from '../models';
import { DashboardService } from './dynamic-layout.service';
import { IMappedModules, DynamicModuleType, DYNAMIC_MODULES_MAP } from './mapped-modules.interface';
import { TemplateCardContainer } from './template-card/template-card.container';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: ' ',
})
export class BaseLayoutComponent implements OnInit, AfterViewInit {
  @ViewChildren(LayoutOutletDirective) dashboardOutlet: QueryList<LayoutOutletDirective>;
  @Input() formGroup: FormGroup;
  @Input() data: any;
  containers: Array<LayoutContent> = [];
  constructor(
    protected cd: ChangeDetectorRef,
    protected injector: Injector,
    protected compiler: Compiler,
    protected service: DashboardService,
    private route: ActivatedRoute,
    @Inject(DYNAMIC_MODULES_MAP) protected modulesMap: IMappedModules
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.loadContents(id).pipe(
      tap(tracks => (this.containers = tracks))
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

  loadContent = async (template: LayoutOutletDirective, item: PageSetting) => {
    if (!item.name) {
      return;
    }
    try {
      const viewContainerRef = template.viewContainerRef;
      viewContainerRef.clear();
      const moduleOrFactory = await this.modulesMap[item.name].load();
      let moduleFactory;
      if (moduleOrFactory instanceof NgModuleFactory) {
        moduleFactory = moduleOrFactory; // AOT
      } else {
        moduleFactory = await this.compiler.compileModuleAsync(moduleOrFactory); // JIT
      }
      const moduleRef = moduleFactory.create(this.injector);
      console.log(item.cName);
      const rootComponent = (moduleFactory.moduleType as DynamicModuleType).entryComponents[`${item.cName}ContainerComponent`];
      const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
      const componentRef = viewContainerRef.createComponent(factory);
      const instance = componentRef.instance as TemplateCardContainer;
      item.extra = this.data;
      instance.item = item;
      instance.formGroup = this.formGroup;
    }catch (error) {
      console.error(error.message);
    }
  }

  changed = (items: Array<PageSetting>, trackIndex: number) => {
    const state = this.containers;
    state[trackIndex].items = items as Array<PageSetting>;
    this.service.setState(state);
  }
}
