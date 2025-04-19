import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HottravellistComponent } from './hottravellist/hottravellist.component';

const routes: Routes = [
  {path:'',component:HottravellistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HottravelRoutingModule { }
