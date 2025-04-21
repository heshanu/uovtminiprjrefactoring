import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HotelsListInterface } from '../../model/hotel_interface';
import { HotelobjService } from '../../service/hotelobj.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { updateHotel, addHotel, addFood} from '../../store/orders/orders.actions';
import { HotelItem } from '../../store/orders/orders.status';

@Component({
    selector: 'app-dialog-hotelconfirm',
    templateUrl: './dialog-hotelconfirm.component.html',
    styleUrl: './dialog-hotelconfirm.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DialogHotelconfirmComponent {
  readonly dialogRef = inject(MatDialogRef<DialogHotelconfirmComponent>);

    data!:HotelItem;
  
    constructor(private hotelObj : HotelobjService,
      private store: Store<AppState> ) {}
  
    ngOnInit() {
      this.hotelObj.data$.subscribe((data:HotelItem) => {
        this.data = data;
        console.log(this.data);
        
      });
    }
  
    confirmBtn(){
      this.store.dispatch(addHotel({ order:this.data }));
     //this.store.dispatch(addFood({ order:this.data}));
    }
}
