import { Component, Input, OnInit } from '@angular/core';
import { HotelsListInterface } from '../../../model/hotel_interface';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { addHotelExpenses,removeHotelExpenseById } from '../../../store/orders/orders.actions';

@Component({
  selector: 'app-hotelexpenses',
  standalone: false,
  templateUrl: './hotelexpenses.component.html',
  styleUrl: './hotelexpenses.component.css'
})
export class HotelexpensesComponent implements OnInit{

  constructor(   private store:Store<AppState>){
  }
  
  @Input() List!:any[];

  hotelList!:any[];

  ngOnInit(): void {
    this.hotelList=this.List;
    this.getTotalQuantity();
    this.getTotalValue();
  }

  getTotalQuantity(): number {
    return this.hotelList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.hotelList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  }

  setHotelExpenses(quantity:number,price:number){
    this.store.dispatch(addHotelExpenses({expense:quantity*price}));
    this.getTotalQuantity();
    this.getTotalValue();
  }

  reducedHotelExpense(id:string){
    this.store.dispatch(removeHotelExpenseById({id:id}));
    this.getTotalQuantity();
    this.getTotalValue()
  }

}
