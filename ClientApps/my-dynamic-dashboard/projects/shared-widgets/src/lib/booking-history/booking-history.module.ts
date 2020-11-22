import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { BookingHistoryComponent } from './booking-history.component';



@NgModule({
  declarations: [ BookingComponent, BookingHistoryComponent],
  imports: [
    CommonModule
  ],
  exports: [ BookingComponent, BookingHistoryComponent ]
})
export class BookingHistoryModule { }
