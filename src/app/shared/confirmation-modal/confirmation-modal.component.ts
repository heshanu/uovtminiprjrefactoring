import { Component, OnInit } from '@angular/core';
import { BeverageItem } from '../../store/orders/orders.status';
import { BeverageobjService } from '../../service/beverageobj.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { addBeverage } from '../../store/orders/orders.actions';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrl: './confirmation-modal.component.css',
    standalone: false
})
export class ConfirmationModalComponent implements OnInit{
    
    data!:BeverageItem;

    constructor(private beverageObj:BeverageobjService,
        private store:Store<AppState>
    ){}

    ngOnInit(): void {
        this.beverageObj.data$.subscribe((data)=>{
            this.data=data;
            this.data.quantity=10;
            this.data.price=1200;
        })
    }

    confirmBtn(){
        this.store.dispatch(addBeverage({order:this.data}));
    }    
}
