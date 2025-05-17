import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsbookingRoutingModule } from './hotelsbooking-routing.module';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HotelsbookingRoutingModule,
    SharedcompoentModule
  ]
})
export class HotelsbookingModule { }
