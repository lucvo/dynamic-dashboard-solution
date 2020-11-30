import {
  ChangeDetectorRef,
  Compiler,
  Inject,
  Injector,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDynamicComponent } from '../base-dynamic.component';
import { DynamicContentDirective } from './dynamic-content.directive';
import {
  DynamicComponentDictionary,
  DYNAMIC_COMPONENT_DICTIONARY,
} from './dynamic-content.dictionary';
export class DynamicContentComponentBase extends BaseDynamicComponent {
  @ViewChildren(DynamicContentDirective)
  outlets: QueryList<DynamicContentDirective>;
  @Input() formGroup: FormGroup;
  @Input() data: any;
  constructor(
    protected cd: ChangeDetectorRef,
    protected injector: Injector,
    protected compiler: Compiler,
    @Inject(DYNAMIC_COMPONENT_DICTIONARY)
    protected mapDictionary: DynamicComponentDictionary
  ) {
    super();
  }
  loadContents = () => {
    if (!this.outlets || !this.outlets.length) {
      return;
    }
    this.outlets.forEach((template) => {
      this.cd.detectChanges();
      this.loadContent(template, template.data);
    });
    this.cd.detectChanges();
  };
  loadContent(template: DynamicContentDirective, item: any): void {
    throw new Error('Method not implemented.');
  }
  bind(item: any, instance: any): void {}
}
