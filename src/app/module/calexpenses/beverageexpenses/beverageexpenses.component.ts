import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { getBeverageExpenseValue } from '../../../store/orders/orders.selectors';
import { addBeverageExpenses, removeBeverageExpenseById } from '../../../store/orders/orders.actions';

@Component({
  selector: 'app-beverageexpenses',
  standalone: false,
  templateUrl: './beverageexpenses.component.html',
  styleUrl: './beverageexpenses.component.css'
})
export class BeverageexpensesComponent implements OnInit{

  beverageExpenses$!:Observable<number>;
  beveragelSub!:Subscription;

  constructor( private store:Store<AppState>){
      this.beverageExpenses$ = this.store.select(getBeverageExpenseValue);
  }

  @Input() List$!:Observable<any>;

  beverageList!:any[];

  ngOnInit(): void {
    this.List$.subscribe((val)=>{
      this.beverageList=val;
    })
    //this.beverageList=this.List;
  }

  getTotalQuantity(): number {
    return this.beverageList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.beverageList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  }

  reducedBeverageExpense(id: string) {
  //  throw new Error('Method not implemented.');
     this.store.dispatch(removeBeverageExpenseById({id:id}));
  }

  setBeverageExpenses(quantity:number,price:number) {
     this.store.dispatch(addBeverageExpenses({expense:quantity*price}));
  }

}
