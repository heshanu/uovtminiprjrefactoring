import { ActionReducerMap } from '@ngrx/store';
import { OrderState } from '../app/store/orders/orders.status';
import { orderReducer } from './store/orders/orders.reducer';
import { CustomerState } from './store/customers/customer.status';
import { customerReducer } from './store/customers/customer-id.reducer';

// AppState interface represents the entire application state
export interface AppState {
  orders: OrderState;
  customers: CustomerState;
}

// Combined reducer
export const appReducers: ActionReducerMap<AppState> = {
  orders: orderReducer,
  customers: customerReducer
};