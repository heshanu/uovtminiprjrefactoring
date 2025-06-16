import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalexpensesRoutingModule } from './calexpenses-routing.module';
import { HotelexpensesComponent } from './hotelexpenses/hotelexpenses.component';
import { CalexpensesComponent } from './calexpenses.component';
import { FoodexpensesComponent } from './foodexpenses/foodexpenses.component';
import { BeverageexpensesComponent } from './beverageexpenses/beverageexpenses.component';
import { TraveleexpensesComponent } from './traveleexpenses/traveleexpenses.component';
import { MaterialModule } from '../../shared/materialModule';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';


@NgModule({
  declarations: [
    HotelexpensesComponent,
    CalexpensesComponent,
    FoodexpensesComponent,
    BeverageexpensesComponent,
    TraveleexpensesComponent
  ],
  imports: [
    CommonModule,
    CalexpensesRoutingModule,
    MaterialModule,
    SharedcompoentModule
  ],
  exports:[
    CalexpensesComponent
  ]
})
export class CalexpensesModule { }
