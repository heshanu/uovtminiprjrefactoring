import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ]
})
export class RegisterModule { }
