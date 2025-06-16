import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setCustomer} from '../../store/customers/customer-id.actions';
import { finalize, Observable, Subscription } from 'rxjs';
import { getCustomerDetail, selectCustomerId } from '../../store/customers/customer.selectors';
import { AppState } from '../../app.reducer';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import { SpinnerService } from '../../service/spinner.service';
import { CustomerState } from '../../store/customers/customer.status';
@Component({
    selector: 'app-customers-dash-board',
    templateUrl: './customers-dash-board.component.html',
    styleUrl: './customers-dash-board.component.css',
    standalone: false
})

export class CustomersDashBoardComponent implements OnInit,OnDestroy{

  customerService=inject(CustomerdetailsService);

  customerDetails$!: Observable<CustomerState|undefined>;
  customerId!:string|undefined;
  private subscription!: Subscription;

  isLoading$!: Observable<boolean>;

  errorState = {
    hasError: false,
    message: ''
  };

  customersList$!:Observable<CustomerdetailsInterface[]>;

  constructor(private route:Router,private activeRouter:ActivatedRoute,
    private store: Store<AppState>,private spinnerService:SpinnerService,private customerDetailsService:CustomerdetailsService){
    this.customerDetails$ = this.store.pipe(select(getCustomerDetail));
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.customersList$ = this.customerService.getAllCustomers();

    this.subscription=this.customerDetails$.subscribe((data) => {
      this.customerId = data?.customer._id; // Update the component's state with the new value
      console.log('Customer ID:', this.customerId); // Optional: Log the value
    });

    this.isLoading$=this.spinnerService.loading$;
    this.spinnerService.showLoading();
    this.errorState = { hasError: false, message: '' };

    /*
    this.customerService.getAllCustomers().pipe(
      finalize(() => this.spinnerService.hideLoading())
    ).subscribe({
      next: (data) => (this.customersList = data),
      error: (err) => {
        this.errorState = {
          hasError: true,
          message: err.message || 'An error occurred while fetching beverages.'
        };
        console.error('Error fetching beverages:', err);
      }
    });*/

    this.spinnerService.hideLoading();
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
          endDate: customer.endDate,
          status:customer.status,
          totalExpense:customer.totalExpense,
          phonenum:customer.phonenum
        },
        loading: true,
        error: null
      })
    );
  }
  }

  completed(customer: CustomerdetailsInterface) {
    this.route.navigate(['']);
  }
}
