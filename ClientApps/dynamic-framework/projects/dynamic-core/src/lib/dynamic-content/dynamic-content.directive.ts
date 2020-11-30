import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicContent]'
})
export class DynamicContentDirective {
  @Input() data;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
