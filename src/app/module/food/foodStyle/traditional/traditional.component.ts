import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';
import { FoodserviceService } from '../../../../service/foodservice.service';
import { SpinnerService } from '../../../../service/spinner.service';

@Component({
    selector: 'app-traditional',
    templateUrl: './traditional.component.html',
    styleUrl: './traditional.component.css',
    standalone: false
})
export class TraditionalComponent implements OnInit ,OnDestroy{

  ngOnInit(): void {
    this.getSouthernFoods();
  }


 traditionalFoodListSubscription!:Subscription;

 traditionalFoodList:any[]=[];

  constructor(private foodService:FoodserviceService,public spinner:SpinnerService){}

  getSouthernFoods(){
    this.traditionalFoodList = this.foodService.getTraditionalFoods();
  }

  ngOnDestroy(): void {
    if(this. traditionalFoodListSubscription){
      this. traditionalFoodListSubscription.unsubscribe();
    }
  }

}
