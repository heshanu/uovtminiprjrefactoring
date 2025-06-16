import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription, take } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CustomerdetailsInterface } from '../../../model/customerDetailsInterface';
import { AppState } from '../../../app.reducer';
import { getCustomerDetail } from '../../../store/customers/customer.selectors';

interface ItemAccodianInterface{
  itemName:string,
  description:string,
  link:string
}

@Component({
    selector: 'app-hotellist',
    templateUrl: './hotellist.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './hotellist.component.css',
    standalone: false
})

export class HotellistComponent implements OnInit,OnDestroy{
  customerObj$!: Observable<CustomerdetailsInterface|any>;
  private subscription!: Subscription;

  btnCaption = "Back";
  btnColor = "red";
  customerId!:string;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ){
    this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription=this.customerObj$.subscribe((data) => {
      this.customerId = data._id;
    });
  }

  items:ItemAccodianInterface[]= [
    {"itemName":"Mode of travel","description":"This may be train,bike or footbike,safari jeep","link":"travelMode"},
    {"itemName":"Hotel accomadtion","description":"This may be place where your fav to accomadate","link":"hotelslist"},
    {"itemName":"Food cusine","description":"This may be thing ,your fav","link":"foodslist"},
    {"itemName":"Beverage","description":"This may be te fav drink","link":"beverage"},
    { "itemName": "Find a host areas in SriLanka", "description": "This may assists you to find famous places arround area", "link": "hottravel" },
    { "itemName": "Chat with customer", "description": "This may help you to internact with customers", "link": "chatapp" },
    { "itemName": "Calculate Expenss of whole trip", "description": "This may help you to calculate cost of your order", "link": "calExpenses" },

  ]

  expandedIndex = 0;

  navigateTo(link: string) {
    console.log('this is inside hotelslist',link);
    this.router.navigate(["customerDashboard/", this.customerId,link])
        .then((nav: boolean) => {
          console.log('Navigation successful:', nav);
        })
        .catch((err: Error) => {
          console.error('Navigation error:', err);
        })
  }
}
