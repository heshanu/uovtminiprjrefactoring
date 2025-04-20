import { createAction, props } from '@ngrx/store';
import { Order, OrderState } from './orders.status';

export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ orders: Order[] }>()
);
export const loadOrdersFailure = createAction(
  '[Order] Load Orders Failure',
  props<{ error: string }>()
);

// Add Order
export const addOrder = createAction(
  '[Order] Add Order',
  props<{ order: OrderState }>()
);

// Update Order Status
export const updateOrderStatus = createAction(
  '[Order] Update Status',
  props<{ orderId: string, status: string }>()
);

// Set Current Order
export const setCurrentOrder = createAction(
  '[Order] Set Current Order',
  props<{ orderId: string }>()
);
