import { Component, Input, OnInit } from '@angular/core';
import { FoodsInterface } from '../../../model/foodrecipe.model';
import { FoodItem } from '../../../store/orders/orders.status';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { getFoodExpenseValue } from '../../../store/orders/orders.selectors';
import { addFoodExpenses,removeFoodExpenseById } from '../../../store/orders/orders.actions';

@Component({
  selector: 'app-foodexpenses',
  standalone: false,
  templateUrl: './foodexpenses.component.html',
  styleUrl: './foodexpenses.component.css'
})
export class FoodexpensesComponent implements OnInit{

  foodExpenses$!:Observable<number>;
  hotelSub!:Subscription;

    constructor(   private store:Store<AppState>){
        this.foodExpenses$ = this.store.select(getFoodExpenseValue);
     //   this.hotelExpenses$=this.store.select()
    }

  @Input() List$!:Observable<any>;

  foodList!:FoodItem[];

  ngOnInit(): void {
    this.List$.subscribe((val)=>{
      this.foodList=val;
    })
    this.getTotalQuantity();
    this.getTotalValue();
  }

  getTotalQuantity(): number {
    return this.foodList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.foodList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  }

  reducedFoodExpense(id:string) {
  this.store.dispatch(removeFoodExpenseById({id:id}));
  }

  setFoodExpenses(quantity: number,price:number) {
      this.store.dispatch(addFoodExpenses({expense:quantity*price}));
    }


}
