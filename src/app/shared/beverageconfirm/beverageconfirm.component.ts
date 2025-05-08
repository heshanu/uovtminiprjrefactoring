import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { addBeverage } from '../../store/orders/orders.actions';

@Component({
    selector: 'app-beverageconfirm',
    templateUrl: './beverageconfirm.component.html',
    styleUrl: './beverageconfirm.component.css',
    standalone: false
})
export class BeverageconfirmComponent {

   readonly dialog = inject(MatDialog);
 
  packages:any[]=[
        {name:"small" ,value:" LKR 500"},
        {name:"Standard",value:"LKR 1500"},
        {name:"medium ",value:"LKR 2000"},
        {name:"Large ",value: "LKR 4000"},
        {name:"GrandPa",value:" LKR 2000"},
        {name:"Monthly Special",value:"LKR 15000"}
    ]
 
   constructor(
     public dialogRef: MatDialogRef<BeverageconfirmComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private store:Store<AppState>
   ) {}

 
   bookPackage(pkg:any,enterAnimationDuration: string, exitAnimationDuration: string) {
    console.log(pkg);
    pkg.price=100;
    pkg.quantity=1;
    this.store.dispatch(addBeverage({order:pkg}));
    this.dialog.open(ConfirmationModalComponent, {
     width: '250px',
     enterAnimationDuration,
     exitAnimationDuration,
   });
    
   }
  
}
