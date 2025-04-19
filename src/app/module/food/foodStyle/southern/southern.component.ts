import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService } from '../../../../service/foodservice.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';
import { SpinnerService } from '../../../../service/spinner.service';

@Component({
    selector: 'app-southern',
    templateUrl: './southern.component.html',
    styleUrl: './southern.component.css',
    standalone: false
})
export class SouthernComponent implements OnInit ,OnDestroy{

  spinner$!:Observable<boolean>;
  
  constructor(private foodService:FoodserviceService,
    public spinnerService:SpinnerService){}  


  ngOnInit(): void {
    this.getSouthernFoods();
    this.spinner$=this.spinnerService.loading$;
  }

  getSouthernFoods(){
    this.spinnerService.showLoading();
    this.southernFoodListSubscription=this.foodService.getSouthernFoods()
    .subscribe((food:any)=>{
      this.southernFoodList=food.recipes;
      this.spinnerService.hideLoading();
      //console.log(this.southernFoodList);   
    })
    this.spinnerService.hideLoading();
   
  }

  southernFoodListSubscription!:Subscription;

  southernFoodList:FoodsInterface[]=[];

  ngOnDestroy(): void {
    if(this.southernFoodListSubscription){
      this.southernFoodListSubscription.unsubscribe();
    }
  }

}
