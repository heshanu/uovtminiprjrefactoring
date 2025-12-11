import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripplanComponent } from './tripplan.component';

const routes: Routes = [
     {path:"",component:TripplanComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripplanRoutingModule { }
