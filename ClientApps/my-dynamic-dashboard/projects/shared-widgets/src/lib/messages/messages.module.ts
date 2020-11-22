import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages.component';



@NgModule({
  declarations: [MessageComponent, MessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent, MessagesComponent]
})
export class MessagesModule { }
