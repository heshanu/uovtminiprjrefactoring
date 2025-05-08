import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { addTravelExpenses,removeHotelExpenseById } from '../../../store/orders/orders.actions';

@Component({
  selector: 'app-traveleexpenses',
  standalone: false,
  templateUrl: './traveleexpenses.component.html',
  styleUrl: './traveleexpenses.component.css'
})
export class TraveleexpensesComponent implements OnInit{

  constructor(private store: Store<AppState>){}

  @Input() List$!:Observable<any>;

  travelList!:any[];

  ngOnInit(): void {
    this.List$.subscribe((val)=>{
      this.travelList=val;
    })
  }


  getTotalQuantity(): number {
    return this.travelList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.travelList.reduce((sum, product) => sum + (product.quantity * product.ratePerDay), 0);
  }

  reducedTravelExpense(id: string) {
      this.store.dispatch(removeHotelExpenseById({id:id}));
  }
    
  setTravelExpenses(quantity:number,pricePerDay:number) {
      this.store.dispatch(addTravelExpenses({expense:quantity*pricePerDay}));
  }
}
