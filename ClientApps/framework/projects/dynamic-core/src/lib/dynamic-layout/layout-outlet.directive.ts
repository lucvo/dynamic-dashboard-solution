import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLayouOutlet]',
})
export class LayoutOutletDirective {
  @Input() item;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
