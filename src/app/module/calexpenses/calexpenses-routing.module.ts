import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelexpensesComponent } from './hotelexpenses/hotelexpenses.component';
import { CalexpensesComponent } from './calexpenses.component';

const routes: Routes = [
  {path:'',component:CalexpensesComponent},
  {path:'hotel',component:HotelexpensesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalexpensesRoutingModule { }
