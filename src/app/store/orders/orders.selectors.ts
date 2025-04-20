import { createSelector } from "@ngrx/store";
import { Order, OrderState } from "./orders.status";
import { AppState } from "../../app.reducer";

// Select the customer state slice from the global state
export const selectOrderState = (state: AppState) => state.orders;

// Selector to get the order details
export const selectOrderDetails  = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState
);

export const selectOrdersByCustomer = (customerId: string) => createSelector(
  selectOrderState,
  (orders:any) => orders.filter((order:Order) => order.customerId === customerId)
);