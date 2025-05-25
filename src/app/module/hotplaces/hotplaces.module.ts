import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotplacesRoutingModule } from './hotplaces-routing.module';
import { HotplacesComponent } from './hotplaces.component';
import { FormsModule } from '@angular/forms';
import { SharedcompoentModule } from '../sharedcompoent/sharedcompoent.module';
import { MaterialModule } from '../../shared/materialModule';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    HotplacesComponent,
    OutputComponent
  ],
  imports: [
    CommonModule,
    HotplacesRoutingModule,
    FormsModule,
    SharedcompoentModule,
    MaterialModule
  ]
})
export class HotplacesModule { }
