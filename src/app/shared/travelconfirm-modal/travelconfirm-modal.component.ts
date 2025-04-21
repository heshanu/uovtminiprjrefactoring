import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from '../../store/orders/orders.status';
import{ OrderObjService } from "../../service/order-obj.service"
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { addOrder, updateOrder } from '../../store/orders/orders.actions';

@Component({
  selector: 'app-travelconfirm-modal',
  standalone: false,
  templateUrl: './travelconfirm-modal.component.html',
  styleUrl: './travelconfirm-modal.component.css'
})
export class TravelconfirmModalComponent implements OnInit{

  readonly dialogRef = inject(MatDialogRef<TravelconfirmModalComponent>);

  data!:OrderItem;

  constructor(private OrderObjService : OrderObjService,
    private store: Store<AppState> ) {}

  ngOnInit() {
    this.OrderObjService.data$.subscribe((data:OrderItem) => {
      this.data = data;
    });
  }

  confirmBtn(){
    this.store.dispatch(addOrder({ order: this.data }));
    this.store.dispatch(updateOrder({ order:this.data}));
  }
}