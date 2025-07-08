import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerdetailsInterface } from '../model/customerDetailsInterface';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor() { }

  private customer$ = new BehaviorSubject<CustomerdetailsInterface | null>(null);

  setCustomer(data: any): void {
    this.customer$.next({
      _id: data._id,
      name: data.name,
      age: data.age,
      address: data.address,
      accomadation: data.accomadation,
      travelMode: data.travelMode,
      foodList: data.foodList,
      foodListOption: data.foodListOption,
      beverageList: data.beverageList,
      beverageListOption: data.beverageListOption,
      startDate: data.startDate,
      endDate: data.endDate,
      status: data.status,
      totalExpense: data.totalExpense,
      phonenum: data.phonenum
    });
  }


  getCustomerId() {
    return this.customer$.asObservable();
  }

  clearCustomer() {
    this.customer$.next(null);
  }
}

