import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotellistComponent } from './hotellist/hotellist.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { MaterialModule } from '../../shared/materialModule';
import { TravelModeComponent } from './travel-mode/travel-mode.component';
import { CustomerObjectService } from '../../service/customer-object.service';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';

@NgModule({
  declarations: [
    HotellistComponent,
    TravelModeComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MaterialModule,
    CdkAccordionModule,
    SharedcompoentModule
    ],
  exports:[
  ],
  providers:[CustomerObjectService]
})
export class HotelModule { }
