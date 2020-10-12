import { Component } from '@angular/core';
import { MyAuthorizationService } from './my-authorization.service';
import { TemplateCardContainer } from '@dashboard-core/dynamic-layout/template-card/template-card.container';

@Component({
    template: `
      <app-my-authorization></app-my-authorization>
    `,
  })
export class MyAuthorizationContainerComponent extends TemplateCardContainer {
  constructor(private authorizationService: MyAuthorizationService) {
    super();
  }
}
