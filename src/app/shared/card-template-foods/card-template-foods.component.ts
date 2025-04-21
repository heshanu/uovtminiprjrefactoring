import { Component, inject, Input } from '@angular/core';
import { FoodsInterface } from '../../model/foodrecipe.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogHotelconfirmComponent } from '../dialog-hotelconfirm/dialog-hotelconfirm.component';
import { DialogCompoentComponent } from '../dialog-hotel/dialog-compoent.component';
import { FoodobjService } from '../../service/foodobj.service';
import { FoodItem } from '../../store/orders/orders.status';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { addFood } from '../../store/orders/orders.actions';
import { FoodconfirmComponent } from '../foodconfirm/foodconfirm.component';

@Component({
    selector: 'app-card-template-foods',
    templateUrl: './card-template-foods.component.html',
    styleUrl: './card-template-foods.component.css',
    standalone: false
})
export class CardTemplateFoodsComponent {

  constructor(private foodObj:FoodobjService,private store: Store<AppState>){}

  data!:FoodItem;

  ngOnInit(): void {
    this.list=this.recivedList;
  }

  @Input() recivedList:any[]=[];

  readonly dialog = inject(MatDialog)

  list:any[]=[];

  selectItem(item:any,enterAnimationDuration: string, exitAnimationDuration: string) {
   // console.log("booked ",item);
   this.foodObj.setData(item);
    this.dialog.open(FoodconfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    }); 
  }
  
refresh() {
  this.ngOnInit();
}

bookNow(item: any,enterAnimationDuration: string, exitAnimationDuration: string) {
  console.log("booked ",item);
  this.dialog.open(FoodconfirmComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  }); 
}


openPackageDialog(item: FoodsInterface,$event: MouseEvent) {
  $event.stopPropagation(); // Prevent card click event
    
    const dialogRef = this.dialog.open(DialogCompoentComponent, {
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
}
