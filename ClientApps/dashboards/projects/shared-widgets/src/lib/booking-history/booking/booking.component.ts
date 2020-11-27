import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Input() date: Date;
  @Input() duration: number;
  @Input() seat: string;
  constructor() { }

  ngOnInit(): void {
  }

}
