import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./orders.status";

const selectOrderState = createFeatureSelector<OrderState>('orders');

// Selector to get the order details
export const selectOrderDetails = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState
);