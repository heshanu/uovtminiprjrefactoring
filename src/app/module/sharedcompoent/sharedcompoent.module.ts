import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcompoentRoutingModule } from './sharedcompoent-routing.module';
import { BackbtnComponent } from './backbtn/backbtn.component';
import { MaterialModule } from '../../shared/materialModule';
import { CardforplacesComponent } from './cardforplaces/cardforplaces.component';
import { SharedspinnerComponent } from './sharedspinner/sharedspinner.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    BackbtnComponent,
    CardforplacesComponent,
    SharedspinnerComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    SharedcompoentRoutingModule,
    MaterialModule,FormsModule,ReactiveFormsModule
  ],
  exports: [
    BackbtnComponent,
    CardforplacesComponent,
    SharedspinnerComponent,
    ChatbotComponent 
  ]
})
export class SharedcompoentModule { }
