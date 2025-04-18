import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';
import { BeverageService } from '../../../service/beverage.service';
import { finalize, Subscription } from 'rxjs';

interface Drink {
  idDrink: string;
  strDrink: string;
  // ... other properties
}

@Component({
    selector: 'app-beveragelist',
    templateUrl: './beveragelist.component.html',
    styleUrls: ['./beveragelist.component.css'],
    standalone: false
})
export class BeveragelistComponent implements OnInit, OnDestroy {
  recipeTypeList: Drink[] = [];
  loading = false;
  errorState = {
    hasError: false,
    message: ''
  };
  private beverageSubscription!: Subscription;

  constructor(private beverageService: BeverageService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.errorState = { hasError: false, message: '' };
    
    this.beverageSubscription = this.beverageService.getAllBeverages().pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: (data: any) => {
        this.recipeTypeList = data.drinks;
      },
      error: (err) => {
        this.errorState = {
          hasError: true,
          message: err.message || 'An error occurred while fetching beverages.'
        };
        console.error('Error fetching beverages:', err);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.beverageSubscription) {
      this.beverageSubscription.unsubscribe();
    }
  }
}
