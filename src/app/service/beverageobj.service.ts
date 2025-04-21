import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeverageobjService {

   constructor() { }
    
      order:any={
        idDrink:"",
        strDrink:"",
        strInstructions:'',
        price:0
       }
    
      private dataSubject = new BehaviorSubject<any>(this.order);
    
      data$ = this.dataSubject.asObservable();
    
      setData(data: any) {
        this.dataSubject.next(data);
      }
    
      getData() {
        return this.dataSubject.value;
      }
}
