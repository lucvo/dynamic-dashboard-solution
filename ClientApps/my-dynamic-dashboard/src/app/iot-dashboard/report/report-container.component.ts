import { Component, OnInit } from '@angular/core';
import { TemplateCardContainer } from 'dynamic-core';

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.scss']
})
export class ReportContainerComponent extends TemplateCardContainer {

  constructor() {
    super();
  }

}
