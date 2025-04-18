import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaterialModule } from '../../shared/materialModule';


@NgModule({ declarations: [
        LoginComponent
    ], imports: [BrowserModule,
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class LoginModule {

 }
