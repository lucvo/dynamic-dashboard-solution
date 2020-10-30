import { Component } from '@angular/core';
import { HelloService } from './hello.service';
import { TemplateCardContainer } from '@dashboard-core/dynamic-layout/template-card/template-card.container';


@Component({
  template: `
    <app-hello-world [name]="name"></app-hello-world>
  `,
})
export class HelloWorldTwoContainerComponent extends TemplateCardContainer {
  name;

  constructor(private helloWorldService: HelloService) {
    super();
    this.name = helloWorldService.names[1];
  }
}
