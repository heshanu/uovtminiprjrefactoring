import { Component, OnInit } from '@angular/core';
import { WhatappService } from '../../service/whatapp.service';
import { environment } from '../../../environments/environment';
import { AppState } from '../../app.reducer';
import { select, Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { getBeverageExpenseValue, getFoodExpenseValue, getFullExpense, getHotelExpenseValue, getTravelExpenseValue, selectOrderBeverageListDetails, selectOrderFoodsListDetails, selectOrderHotelsListDetails, selectOrderTravelsListDetails } from '../../store/orders/orders.selectors';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { CalexpensesComponent } from '../calexpenses/calexpenses.component';
import { FoodsInterface } from '../../model/foodrecipe.model';
import { HotelsListInterface } from '../../model/hotel_interface';
import { getCustomerDetail } from '../../store/customers/customer.selectors';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css'],
  standalone:false
})
export class ChatappComponent implements OnInit{
   totalObseravable$!:Observable<number>;
   totalObseravable!:number;
   totalObservalbleSub!:Subscription;

  recipient = '';
  message = '';
  isSending = false;
  status = '';
  statusColor = 'text-muted';
  sentMessages: any[] = [];
   btnCaption= "Back";
  btnColor = "red";

   constructor(private http: HttpClient, private store: Store<AppState>,private whatsappService: WhatappService){
      this.totalObseravable$=this.store.pipe(select(getFullExpense));
  }

  ngOnInit(): void {
    this.totalObservalbleSub=this.totalObseravable$.subscribe((val=>{
      this.totalObseravable=val;
    }))

  }

  sendMessage() {

    if (!this.recipient || !this.message) return;

    console.log(this.message);

    this.isSending = true;
    this.status = 'Sending...';
    this.statusColor = 'text-primary';
    const phoneNumber = this.recipient;

    if(this.recipient){
          this.whatsappService.sendTemplateMessage(phoneNumber, this.message)
      .subscribe({
        next: (response) => {
          this.status = 'Message sent successfully!';
           this.statusColor = 'text-success';
      this.sentMessages.push({
        to: this.recipient,
        message: this.message,
        timestamp: new Date(),
      //  sid:environment.TWILIO_ACCOUNT_SID
      });
          console.log('Twilio response:', response);

        },
        error: (err) => {
          this.status = `Error: ${err.error?.message || err.message}`;
        //  this.status = `Error: ${this.recipient.error}`;
      this.statusColor = 'text-danger';
          console.error('Twilio error:', err);
        }
      });
    }else{
      alert( "Undefined");
    }
  }

}
