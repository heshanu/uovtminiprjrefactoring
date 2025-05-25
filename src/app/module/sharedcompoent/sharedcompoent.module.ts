import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcompoentRoutingModule } from './sharedcompoent-routing.module';
import { BackbtnComponent } from './backbtn/backbtn.component';
import { MaterialModule } from '../../shared/materialModule';
import { CardforplacesComponent } from './cardforplaces/cardforplaces.component';
import { SharedspinnerComponent } from './sharedspinner/sharedspinner.component';
@NgModule({
  declarations: [
    BackbtnComponent,
    CardforplacesComponent,
    SharedspinnerComponent
  ],
  imports: [
    CommonModule,
    SharedcompoentRoutingModule,
    MaterialModule
  ],
  exports: [
    BackbtnComponent,
    CardforplacesComponent,
    SharedspinnerComponent
  ]
})
export class SharedcompoentModule { }
