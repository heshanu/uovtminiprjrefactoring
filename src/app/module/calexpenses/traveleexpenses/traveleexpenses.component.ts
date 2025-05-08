import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { getTravelExpenseValue } from '../../../store/orders/orders.selectors';
import { addTravelExpenses, removeTravelExpenseById } from '../../../store/orders/orders.actions';

@Component({
  selector: 'app-traveleexpenses',
  standalone: false,
  templateUrl: './traveleexpenses.component.html',
  styleUrl: './traveleexpenses.component.css'
})
export class TraveleexpensesComponent implements OnInit{

  constructor(private store: Store<AppState>){
      this.getTravelExpenses$ = this.store.select(getTravelExpenseValue);
  }

  getTravelExpenses$!: Observable<number>;

  gettravelListSubs!:Subscription;

  @Input() List$!:Observable<any>;

  travelList!:any[];

  ngOnInit(): void {
    this.List$.subscribe((val)=>{
      this.travelList=val;
    })
    this.getTotalQuantity();
    this.getTotalValue();
    //this.travelList=this.List;
  }

  getTotalQuantity(): number {
    return this.travelList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.travelList.reduce((sum, product) => sum + (product.quantity * product.ratePerDay), 0);
  }

  setTravelExpenses(quantity:number,ratePerDay:number){
      this.store.dispatch(addTravelExpenses({expense:quantity*ratePerDay}));
    }
  
  reducedTravelExpense(id:string){
      this.store.dispatch(removeTravelExpenseById({id:id}));
    }
}
