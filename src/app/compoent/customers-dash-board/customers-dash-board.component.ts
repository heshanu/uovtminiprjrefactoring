import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setCustomer} from '../../store/customers/customer-id.actions';
import { finalize, Observable, Subscription } from 'rxjs';
import { selectCustomerId } from '../../store/customers/customer.selectors';
import { AppState } from '../../app.reducer';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import { SpinnerService } from '../../service/spinner.service';

@Component({
    selector: 'app-customers-dash-board',
    templateUrl: './customers-dash-board.component.html',
    styleUrl: './customers-dash-board.component.css',
    standalone: false
})

export class CustomersDashBoardComponent implements OnInit,OnDestroy{

  customerService=inject(CustomerdetailsService);

  customerId$: Observable<string|undefined>;
  customerId!:string|undefined;
  private subscription!: Subscription;

  isLoading$!:Observable<boolean>;

  loading = false;

  errorState = {
    hasError: false,
    message: ''
  };


  customersList:CustomerdetailsInterface[]=[];

  constructor(private route:Router,private activeRouter:ActivatedRoute,
    private store: Store<AppState>,private spinnerService:SpinnerService){
    this.customerId$ = this.store.pipe(select(selectCustomerId));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoading$=this.spinnerService.loading$;
  
    this.subscription=this.customerId$.subscribe((data) => {
      this.customerId = data; // Update the component's state with the new value
      console.log('Customer ID:', this.customerId); // Optional: Log the value
    });
    this.getCustomersDetails();
  }

  getCustomersDetails():void{
    this.loading = true;
    this.errorState = { hasError: false, message: '' };
    this.customerService.getAllCustomers().pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: (data) => (this.customersList = data),
      error: (err) => {
        this.errorState = {
          hasError: true,
          message: err.message || 'An error occurred while fetching beverages.'
        };
        console.error('Error fetching beverages:', err);
      }
    });

  }

  
  planNow(customer:CustomerdetailsInterface,_id:any) {
    console.log();

    if (_id != null) {

      this.route.navigate(['customerDashboard/',_id]);
    //  this.store.dispatch(setCustomerId({_id}));
     console.log("customer is is set",_id);
     console.log(customer);
     
     this.store.dispatch(
      setCustomer({
        customer: {
          _id: customer._id,
          name: customer.name,
          age: customer.age,
          address: customer.address,
          accomadation: customer.accomadation,
          travelMode: customer.travelMode,
          foodList: customer.foodList,
          foodListOption: customer.foodListOption,
          beverageList: customer.beverageList,
          beverageListOption: customer.beverageListOption,
          startDate: customer.startDate,
          endDate: customer.endDate
        },
        loading: true,
        error: null
      })
    );
  }
  }
}