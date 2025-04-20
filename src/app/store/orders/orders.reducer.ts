//import { } from '@ngrx/store';
import { State, StoreModule, createReducer, on } from '@ngrx/store';
import { initialOrderState, Order, OrderState } from './orders.status';
import{loadOrdersSuccess,loadOrdersFailure, addOrder, updateOrderStatus} from "./orders.actions"

export const initialState: OrderState[] = [];

export const orderReducer = createReducer(
  initialOrderState,

on(loadOrdersSuccess, (state, { orders }) => ({
  ...state,
  orderList: orders,
  totalPrice: orders.reduce((sum, order) => sum + order.price, 0),
  loading: false,
  orderDate: orders.length > 0 ? orders[0].orderDate : state.orderDate
})),

on(loadOrdersFailure, (state, { error }) => ({
  ...state,
  error,
  loading: false
})),

// Add Order
on(addOrder, (state, { order }) => ({
  ...state,
  orderList: [...state.orderList, order],
  totalPrice: state.totalPrice + order.totalPrice,
  orderUniqueId:Date.now().toString(),
  orderDate: order.orderDate,
  currentOrderStatus: order.currentOrderStatus
})),


);

