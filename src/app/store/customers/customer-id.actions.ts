import { createAction, props } from '@ngrx/store';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { CustomerState } from './customer.status';

// export const setCustomer=createAction(
//   "[Customer] Set Customer",
//   props<{ _id: number;name: string ,age:number,address:string,
//     accomation:string,travelMode:string,foodList:string,foodListOption:string,
//     beverageList:string,beverageListOption:string,startDate:string,endDate:string}>()
// )

export const setCustomer = createAction(
  '[Customer] Set Customer',
  props<CustomerState>()  // Directly use the CustomerState type for the payload
);

export const addCustomer = createAction('[Customer] Add Customer', props<{ customer: CustomerState }>());
export const updateCustomer = createAction('[Customer] Update Customer', props<{ customer: CustomerState }>());
export const deleteCustomer = createAction('[Customer] Delete Customer', props<{ _id: string }>());

export const loadCustomers = createAction('[Customer] Load Customers');

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ customers: CustomerState[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);

export const calculateCustomerExpenses = createAction(
  '[Customer] Calculate Customers Fees',
  props<{ expenses: any }>()
);

