import { Injectable } from '@angular/core';
import { HotelsListInterface } from '../model/hotel_interface';
import { BehaviorSubject } from 'rxjs';
import { HotelItem } from '../store/orders/orders.status';

@Injectable({
  providedIn: 'root'
})
export class HotelobjService {

  constructor() { }
  
    order:HotelsListInterface={
      hotelId:'',
    hotelName:'',
    address:'',
    avaliableRooms:0,
    img:'',
    numOfStars:0,
    package:[],
    price:0,
    quantity:0
     }
  
    private dataSubject = new BehaviorSubject<HotelsListInterface>(this.order);
  
    data$ = this.dataSubject.asObservable();
  
    setData(data: HotelItem) {
      this.dataSubject.next(data);
    }
  
    getData() {
      return this.dataSubject.value;
    }
}
