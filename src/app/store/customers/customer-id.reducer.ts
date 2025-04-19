import { createReducer, on } from '@ngrx/store';
import { setCustomer} from './customer-id.actions';
import { CustomerState, initialCustomerState } from './customer.status';


// export const customerReducer = createReducer(
//   initialCustomerState,
//   on(setCustomer, (state, customer) => ({ ...state, ...customer })),
// );

export const customerReducer = createReducer(
  initialCustomerState,
  on(setCustomer, (state,{customer}) => ({ ...state, ...customer }))
);
