import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripplanRoutingModule } from './tripplan-routing.module';
import { TripplanComponent } from './tripplan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';


@NgModule({
  declarations: [
    TripplanComponent
  ],
  imports: [
    CommonModule,
    TripplanRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedcompoentModule
  ],
  exports:[
    TripplanComponent
  ]
})
export class TripplanModule { }
