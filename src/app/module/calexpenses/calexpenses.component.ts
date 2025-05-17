import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import {selectOrderHotelsListDetails,selectOrderBeverageListDetails,selectOrderTravelsListDetails,selectOrderFoodsListDetails, getFoodExpenseValue, getHotelExpenseValue, getBeverageExpenseValue, getTravelExpenseValue} from "../../store/orders/orders.selectors"
import { HotelsListInterface, } from '../../model/hotel_interface';
import { FoodItem } from '../../store/orders/orders.status';
import { FoodsInterface } from '../../model/foodrecipe.model';
import { clearHotelexpense} from '../../store/orders/orders.actions';
@Component({
  selector: 'app-calexpenses',
  standalone: false,
  templateUrl: './calexpenses.component.html',
  styleUrl: './calexpenses.component.css'
})
export class CalexpensesComponent implements OnInit {

  hotelList$!: Observable<any|undefined[]>;
  hotelList!:HotelsListInterface[];
  hotelListSubs!:Subscription;

  foodList$!: Observable<any|undefined[]>;
  foodList!:FoodsInterface[];
  foodListSubs!:Subscription;

  beverageList$!: Observable<any|undefined[]>;
  beverageList!:any[];
  beverageListSubs!:Subscription;

  travelList$!: Observable<any|undefined[]>;
  travelList!:any[];
  travelListSubs!:Subscription;

  foodExpenditure$!:Observable<number>;
  beverageExpenditure$!:Observable<number>;
  travelExpenditure$!:Observable<number>;
  hotelExpenditure$!:Observable<number>;

  totalExpenditure$!:Observable<number>;

  constructor(private store: Store<AppState>) {
    // Select the hotel list from the store
    this.hotelList$ = this.store.select(selectOrderHotelsListDetails);
    this.foodList$=this.store.select(selectOrderFoodsListDetails);
    this.beverageList$=this.store.select(selectOrderBeverageListDetails);
    this.travelList$=this.store.select(selectOrderTravelsListDetails);

    this.foodExpenditure$=this.store.select(getFoodExpenseValue);
    this.hotelExpenditure$=this.store.select(getHotelExpenseValue);
    this.beverageExpenditure$=this.store.select(getBeverageExpenseValue);
    this.travelExpenditure$=this.store.select(getTravelExpenseValue);
  }

  ngOnInit() {
    //this.totalExpenditure$=this.foodExpenditure$ + this.hotelExpenditure$ + this.beverageExpenditure$+this.travelExpenditure$;
    this.hotelListSubs=this.hotelList$.subscribe((val)=>{
      this.hotelList=val
    })
    this.foodListSubs=this.foodList$.subscribe((val)=>{
      this.foodList=val
    })
    this.beverageListSubs=this.beverageList$.subscribe((val)=>{
      this.beverageList=val
    })
    this.travelListSubs=this.travelList$.subscribe((val)=>{
      this.travelList=val
    })
  }

  clearAllExpenses() {
    this.store.dispatch(clearHotelexpense());
  }
    
  calculateTotalExpenditure(): Observable<number> {
    return combineLatest([
      this.foodExpenditure$,
      this.hotelExpenditure$,
      this.beverageExpenditure$,
      this.travelExpenditure$
    ]).pipe(
      map(([food, hotel, beverage, travel]) => food + hotel + beverage + travel)
    );

    
  }

  
  btnCaption= "Back";
  btnColor = "red";
}
  

