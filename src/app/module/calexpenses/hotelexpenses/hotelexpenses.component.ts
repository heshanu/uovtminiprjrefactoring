import { Component, Input, OnInit } from '@angular/core';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
  selector: 'app-hotelexpenses',
  standalone: false,
  templateUrl: './hotelexpenses.component.html',
  styleUrl: './hotelexpenses.component.css'
})
export class HotelexpensesComponent implements OnInit{
  
  @Input() List!:any[];

  hotelList!:any[];

  ngOnInit(): void {
    this.hotelList=this.List;
    this.getTotalQuantity();
    this.getTotalValue();
  }

  getTotalQuantity(): number {
    return this.hotelList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.hotelList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  }

}
