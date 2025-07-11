import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';
import { FoodserviceService } from '../../../../service/foodservice.service';

@Component({
    selector: 'app-chineese',
    templateUrl: './chineese.component.html',
    styleUrl: './chineese.component.css',
    standalone: false
})
export class ChineeseComponent implements OnInit ,OnDestroy{

    ngOnInit(): void {
      this.getChineeseFood();
    }

   chineeseFoodListSubscription!:Subscription;

   chineeseFoodList:any[]=[];

    constructor(private foodService:FoodserviceService){}

    getChineeseFood(){

      this.chineeseFoodList = this.foodService.getChineeseFoods();
    }


    ngOnDestroy(): void {
      if(this.  chineeseFoodListSubscription){
        this. chineeseFoodListSubscription.unsubscribe();
      }
    }


}
