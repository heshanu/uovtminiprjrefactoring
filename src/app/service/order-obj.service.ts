import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from '../store/orders/orders.status';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class OrderObjService {

  constructor() { }

  order:OrderItem={
    productId:'',
    name:'',
    quantity:0,
    price:0,
    status:"pending",
    
   }

  private dataSubject = new BehaviorSubject<any>(this.order);

  data$ = this.dataSubject.asObservable();

  setData(data: OrderItem) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.value;
  }
}
