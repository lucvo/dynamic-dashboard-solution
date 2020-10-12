import { Component } from '@angular/core';
import { TemplateCardContainer } from '@dashboard-core/dynamic-layout/template-card/template-card.container';
import { HelloService } from './hello.service';

@Component({
  template: `
    <app-hello-world [name]="name"></app-hello-world>
  `,
})
export class HelloWorldContainerComponent extends TemplateCardContainer {
  name;

  constructor(private helloWorldService: HelloService) {
    super();
  }
}
