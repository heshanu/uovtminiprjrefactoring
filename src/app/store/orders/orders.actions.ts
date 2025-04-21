import { createAction, props } from '@ngrx/store';
import { OrderItem } from './orders.status';

export const loadOrders = createAction('[Order] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ orders: OrderItem[] }>()
);
export const loadOrdersFailure = createAction(
  '[Order] Load Orders Failure',
  props<{ error: string }>()
);

export const addOrder = createAction(
  '[Order] Add Order',
  props<{ order: OrderItem }>()
);

export const updateOrder = createAction(
  '[Order] Update Order',
  props<{ order: OrderItem }>()
);

export const setCurrentOrderStatus = createAction(
  '[Order] Set Current Order Status',
  props<{ status: string }>()
);
