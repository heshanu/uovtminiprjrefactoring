import { Component, inject } from '@angular/core';
import { FoodItem, HotelItem } from '../../store/orders/orders.status';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodobjService } from '../../service/foodobj.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { addFood } from '../../store/orders/orders.actions';

@Component({
  selector: 'app-foodconfirm',
  standalone: false,
  templateUrl: './foodconfirm.component.html',
  styleUrl: './foodconfirm.component.css'
})
export class FoodconfirmComponent {
  readonly dialogRef = inject(MatDialogRef<FoodconfirmComponent>);

  data!:FoodItem;

  constructor(private foodObj : FoodobjService,
    private store: Store<AppState> ) {}

  ngOnInit() {
    this.foodObj.data$.subscribe((data:any) => {
      this.data = data;
      data.price=100;
      data.quantity=2;
      console.log(this.data);
      
    });
  }

  confirmBtn(){
   this.store.dispatch(addFood({ order:this.data}));
  }
}
