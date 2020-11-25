import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: ``,
})
export class TemplateCardContainer {
  @Input() formGroup: FormGroup;
  @Input() item: any;
  @Input() header: string;
}
