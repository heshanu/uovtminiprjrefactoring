import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AppState } from '../app.reducer';
import { select, Store } from '@ngrx/store';
import { getFullExpense } from '../store/orders/orders.selectors';
import { Client } from '@twilio/conversations';

@Injectable({ providedIn: 'root' })
export class WhatappService {

  private accountSid = environment.TWILIO_ACCOUNT_SID;
  private authToken = environment.TWILIO_AUTH_TOKEN;
  private twilioNumber = environment.TWILIO_PHONE_NUMBER;

  reciptant!:string;

  constructor(private http: HttpClient) {

  }

  // Send WhatsApp template message
  sendTemplateMessage(
    to: string,
    body: string,
  ) {
    const apiUrl = `https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`;
        this.reciptant=to;
    // Prepare form data
    const formData = new URLSearchParams();
    formData.set('To', `whatsapp:${to}`);
    formData.set('From', `whatsapp:${this.twilioNumber}`);
    formData.set('Body', body);
    // Set headers with basic authentication
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.accountSid}:${this.authToken}`)
    });
    // Send request
    return this.http.post(apiUrl, formData.toString(), { headers });
  }


}
