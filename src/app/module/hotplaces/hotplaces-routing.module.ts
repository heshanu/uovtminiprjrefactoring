import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotplacesComponent } from './hotplaces.component';

const routes: Routes = [
  {path:'',component:HotplacesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotplacesRoutingModule { }
