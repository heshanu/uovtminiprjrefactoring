import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeverageRoutingModule } from './beverage-routing.module';
import { MaterialModule } from '../../shared/materialModule';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BeverageRoutingModule,
    MaterialModule,
    SharedcompoentModule
  ]
})
export class BeverageModule { }
