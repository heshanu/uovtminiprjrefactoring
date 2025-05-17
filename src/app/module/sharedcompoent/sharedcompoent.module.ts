import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcompoentRoutingModule } from './sharedcompoent-routing.module';
import { BackbtnComponent } from './backbtn/backbtn.component';
import { MaterialModule } from '../../shared/materialModule';


@NgModule({
  declarations: [
    BackbtnComponent
  ],
  imports: [
    CommonModule,
    SharedcompoentRoutingModule,
    MaterialModule
  ],
  exports: [
    BackbtnComponent  
  ]
})
export class SharedcompoentModule { }
