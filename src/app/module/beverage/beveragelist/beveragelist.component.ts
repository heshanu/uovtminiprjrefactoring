import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';
import { BeverageService } from '../../../service/beverage.service';
import { finalize, Observable, Subscription } from 'rxjs';
import { SpinnerService } from '../../../service/spinner.service';


@Component({
    selector: 'app-beveragelist',
    templateUrl: './beveragelist.component.html',
    styleUrls: ['./beveragelist.component.css'],
    standalone: false
})
export class BeveragelistComponent implements OnInit, OnDestroy {
  recipeTypeList: any[] = [];

  isLoading$!:Observable<boolean>;

  loading = false;

  errorState = {
    hasError: false,
    message: ''
  };

  private beverageSubscription!: Subscription;

  constructor(private beverageService: BeverageService,
    private spinnerService:SpinnerService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.isLoading$=this.spinnerService.loading$;
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
