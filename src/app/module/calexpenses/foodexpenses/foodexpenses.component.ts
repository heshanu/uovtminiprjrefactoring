import { Component, Input, OnInit } from '@angular/core';
import { FoodsInterface } from '../../../model/foodrecipe.model';
import { FoodItem } from '../../../store/orders/orders.status';

@Component({
  selector: 'app-foodexpenses',
  standalone: false,
  templateUrl: './foodexpenses.component.html',
  styleUrl: './foodexpenses.component.css'
})
export class FoodexpensesComponent implements OnInit{
  
  @Input() List!:any[];

  foodList!:FoodItem[];

  ngOnInit(): void {
    this.foodList=this.List;
    this.getTotalQuantity();
    this.getTotalValue();
  }

  getTotalQuantity(): number {
    return this.foodList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.foodList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  }

}
