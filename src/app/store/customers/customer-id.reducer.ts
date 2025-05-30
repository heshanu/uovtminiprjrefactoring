import { createReducer, on } from '@ngrx/store';
import { CustomerState, initialCustomerState } from './customer.status';
import {loadCustomers,loadCustomersFailure,loadCustomersSuccess,setCustomer} from "./customer-id.actions"

export const customerReducer = createReducer(
  initialCustomerState,
  on(setCustomer, (state,{customer}) => ({ ...state, ...customer })),
  on(loadCustomers, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadCustomersSuccess, (state, { customers }) => ({
    ...state,
    customers: customers,
    loading: false,
  })),
  on(loadCustomersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

);

