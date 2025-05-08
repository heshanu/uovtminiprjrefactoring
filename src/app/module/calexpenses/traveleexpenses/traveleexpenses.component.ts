import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-traveleexpenses',
  standalone: false,
  templateUrl: './traveleexpenses.component.html',
  styleUrl: './traveleexpenses.component.css'
})
export class TraveleexpensesComponent implements OnInit{

  @Input() List!:any[];

  travelList!:any[];

  ngOnInit(): void {
    this.travelList=this.List;
  }


  getTotalQuantity(): number {
    return this.travelList.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalValue(): number {
    return this.travelList.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  }
}
