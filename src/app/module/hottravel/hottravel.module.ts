import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HottravelRoutingModule } from './hottravel-routing.module';
import { HottravellistComponent } from './hottravellist/hottravellist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HottravellistComponent,
  ],
  imports: [
    CommonModule,
    HottravelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HottravelModule { }
