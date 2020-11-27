import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() effort: number;
  @Input() task: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
