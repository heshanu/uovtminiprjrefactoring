import { calculateCustomerExpenses } from './../../store/customers/customer-id.actions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatappRoutingModule } from './chatapp-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/materialModule';
import { ChatappComponent } from './chatapp.component';
import { CalexpensesComponent } from '../calexpenses/calexpenses.component';
import { CalexpensesModule } from '../calexpenses/calexpenses.module';


@NgModule({
  declarations: [
    ChatappComponent
  ],
  imports: [
    CommonModule,
    ChatappRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CalexpensesModule
  ],
  exports:[

  ]
})
export class ChatappModule { }
