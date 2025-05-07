import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverageexpenses',
  standalone: false,
  templateUrl: './beverageexpenses.component.html',
  styleUrl: './beverageexpenses.component.css'
})
export class BeverageexpensesComponent implements OnInit{

  @Input() List!:any[];

  beverageList!:any[];

  ngOnInit(): void {
    this.beverageList=this.List;
  }

  // getTotalQuantity(): number {
  //   return this.foodList.reduce((sum, product) => sum + product.price, 0);
  // }

  // getTotalValue(): number {
  //   return this.foodList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  // }
}
