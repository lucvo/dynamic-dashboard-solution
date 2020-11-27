import { Component, OnInit } from '@angular/core';
import { TemplateCardContainer } from 'dynamic-core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-workspace-container',
  templateUrl: './workspace-container.component.html',
  styleUrls: ['./workspace-container.component.scss'],
  providers: [MessageService],
})
export class WorkspaceContainerComponent extends TemplateCardContainer implements OnInit {
  items: MenuItem[];
  
  constructor(private messageService: MessageService) {
    super();
  }
  
  ngOnInit() {
      
  }

  update() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
      this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }
}
