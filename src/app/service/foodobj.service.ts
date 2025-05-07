import { Injectable } from '@angular/core';
import { FoodsInterface } from '../model/foodrecipe.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodobjService {

    constructor() { }
  
    order:FoodsInterface={
      id:0,
      name:"",
      image:"",
      ingredients:[],
      price:0
    }
    
    private dataSubject = new BehaviorSubject<FoodsInterface>(this.order);
  
    data$ = this.dataSubject.asObservable();
  
    setData(data: FoodsInterface) {
      this.dataSubject.next(data);
    }
  
    getData() {
      return this.dataSubject.value;
    }
}
