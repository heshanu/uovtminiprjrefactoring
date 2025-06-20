import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { MaterialModule } from '../../shared/materialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';
@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedcompoentModule
  ]
})
export class LocationModule { }
