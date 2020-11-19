import { Component, OnInit } from '@angular/core';
import { TemplateCardContainer } from 'dynamic-core';

@Component({
  selector: 'app-workspace-container',
  templateUrl: './workspace-container.component.html',
  styleUrls: ['./workspace-container.component.scss']
})
export class WorkspaceContainerComponent extends TemplateCardContainer {

  constructor() {
    super();
  }

}
