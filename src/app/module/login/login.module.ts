import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaterialModule } from '../../shared/materialModule';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({ declarations: [
        LoginComponent
], imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
    FormsModule,
        MaterialModule,
        TranslateModule
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class LoginModule {

 }
