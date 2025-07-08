import { Component, inject, OnInit } from '@angular/core';
import { TrainService } from '../../../service/train.service';
import { TrainRoutesInterface } from '../../../model/trainRoutes';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrainComponent } from '../../../shared/dialog-train/dialog-train.component';
import { DialogTrainconfirmComponent } from '../../../shared/dialog-trainconfirm/dialog-trainconfirm.component';
import { SpinnerService } from '../../../service/spinner.service';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { addTravelExpenses, updateTravelExpenses } from '../../../store/orders/orders.actions';

@Component({
    selector: 'app-train',
    templateUrl: './train.component.html',
    styleUrl: './train.component.css',
    standalone: false
})
export class TrainComponent implements OnInit{

  readonly dialog = inject(MatDialog);

  ticketPrice!: number;
  ticketAmount!: number
  trainExpense!: number;

  selectItem(item:any,enterAnimationDuration: string, exitAnimationDuration: string) {
     //console.log("booked ",item);
      this.dialog.open(DialogTrainconfirmComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

  constructor(private router:Router,
    private spinnerService: SpinnerService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  openPackageDialog(item: any,$event: MouseEvent) {
    $event.stopPropagation(); // Prevent card click event

      const dialogRef = this.dialog.open(DialogTrainconfirmComponent, {
        width: '500px',
        maxWidth: '90vw',
        data: {
          hotelName: item.name,
          packages: item.ingredients
        }
      });

      dialogRef.afterClosed().subscribe(selectedPackage => {
        if (selectedPackage) {
          console.log('Selected package:', selectedPackage);
          // Handle the selected package
        }
      });
    }

  clean():void{
    this.ticketAmount = 0;
    this.ticketPrice = 0;
    this.store.dispatch(updateTravelExpenses({ expense: this.trainExpense }));
  }

  btnCaption = "Back";
  btnColor = "red";

  calExpenses(): void{
    this.trainExpense = this.ticketAmount * this.ticketPrice;
    this.store.dispatch(addTravelExpenses({expense: this.trainExpense }));
  }

}
