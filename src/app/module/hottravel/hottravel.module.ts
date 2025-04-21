import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HottravelRoutingModule } from './hottravel-routing.module';
import { HottravellistComponent } from './hottravellist/hottravellist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from '../../shared/map/map.component';

@NgModule({
  declarations: [
    HottravellistComponent,
    MapComponent,
   
  ],
  imports: [
    CommonModule,
    HottravelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MapComponent]
})
export class HottravelModule { }
