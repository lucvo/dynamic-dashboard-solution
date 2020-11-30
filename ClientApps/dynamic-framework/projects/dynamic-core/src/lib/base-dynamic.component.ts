import { ChangeDetectorRef, Compiler, Component, Injector, QueryList, ViewChildren } from '@angular/core';

@Component({
  template: ``,
})
export abstract class BaseDynamicComponent {
  constructor() { }
  abstract loadContents(): void;
  abstract bind(item: any, instance: any): void;
  abstract loadContent(template: any, item: any): void;
  resolve = (moduleRef: any, rootComponent: any, viewContainerRef) => {
    const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
    const componentRef = viewContainerRef.createComponent(factory);
    return componentRef.instance;
  }
}
