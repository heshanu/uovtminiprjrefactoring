import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service';
import { BikeInterface } from '../../model/bike_interface';
import { OrderItem, OrderState } from '../../store/orders/orders.status';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { getCustomerDetail} from '../../store/customers/customer.selectors';
import {selectOrderDetails } from '../../store/orders/orders.selectors';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { addOrder,updateOrder } from '../../store/orders/orders.actions';

@Component({
    selector: 'app-vehicletemplate',
    templateUrl: './vehicletemplate.component.html',
    styleUrls: ['./vehicletemplate.component.css'],
    standalone: false
})
export class VehicletemplateComponent implements OnInit, OnDestroy {
  orderList$!: Observable<OrderState>;
  orderList!: OrderState | undefined;
  private subscriptionOrdersList!: Subscription;

  customerObj$!: Observable<CustomerdetailsInterface|any>;
  private subscription!: Subscription;
  customerId!:string;

  @Input() bikeList: BikeInterface[] = [];

  constructor(private bikeService: BikeService, private store: Store<AppState>) {
    //this.customerId$ = this.store.select(selectCustomerId);
    this.orderList$ = this.store.pipe(select(selectOrderDetails));
    this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
  }

  ngOnInit(): void {
    this.subscription=this.customerObj$.subscribe((data:any) => {
      this.customerId = data._id; 
     // console.log('Customer ID:', this.customerRecivedObj);
    });
    
    this.subscriptionOrdersList = this.orderList$.subscribe({
      next: (data) => {
        this.orderList = data;
      },
      error: (err) => {
        console.error('Error fetching order list', err);
      }
    });

    this.getBikeList();
  }

  getBikeList() {
    this.bikeList = this.bikeService.getHikkaBikeList();
  }

  /**
   * export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

   */
  selectBike(bike:any) {
    console.log(bike, "bike is clicked");

   const order:OrderItem={
    productId:bike.bikeId,
    name:bike.bikeName,
    quantity:bike.quantity,
    price:bike.ratePerDay+100,
    status:"pending"
   }

   /*
   export interface Order {
     orderId: string;
     customerId: string;
     items: OrderItem[];
     orderDate: string;
     price: number;
     status: 'pending' | 'processing' | 'completed' | 'cancelled';
   }*/ 

    
     //this.store.dispatch(createOrder({order:order}));
     this.store.dispatch(addOrder({ order: order }));
     this.store.dispatch(updateOrder({ order:order}));

  }

  ngOnDestroy(): void {
    if (this.subscriptionOrdersList) {
      this.subscriptionOrdersList.unsubscribe();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
