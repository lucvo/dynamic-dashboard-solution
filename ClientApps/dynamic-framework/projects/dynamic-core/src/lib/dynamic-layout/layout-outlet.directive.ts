import { Directive, ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appLayouOutlet]',
})
export class LayoutOutletDirective {
  @Input() item;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
