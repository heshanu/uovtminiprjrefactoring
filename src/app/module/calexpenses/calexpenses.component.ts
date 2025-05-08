import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import {selectOrderHotelsListDetails,selectOrderBeverageListDetails,selectOrderTravelsListDetails,selectOrderFoodsListDetails} from "../../store/orders/orders.selectors"
import { HotelsListInterface, } from '../../model/hotel_interface';
import { FoodItem } from '../../store/orders/orders.status';
import { FoodsInterface } from '../../model/foodrecipe.model';

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


  constructor(private store: Store<AppState>) {
    // Select the hotel list from the store
    this.hotelList$ = this.store.select(selectOrderHotelsListDetails);
    this.foodList$=this.store.select(selectOrderFoodsListDetails);
    this.beverageList$=this.store.select(selectOrderBeverageListDetails);
    this.travelList$=this.store.select(selectOrderTravelsListDetails);
  }

  ngOnInit() {
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


}
  
