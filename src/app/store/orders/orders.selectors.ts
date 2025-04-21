import { createSelector } from "@ngrx/store";
import { OrderItem, OrderState } from "./orders.status";
import { AppState } from "../../app.reducer";

// Select the customer state slice from the global state
export const selectOrderState = (state: AppState) => state.orders;

// Selector to get the order details
export const selectOrderDetails  = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState
);

export const selectAllOrders = createSelector(
  selectOrderState,
  (state: OrderState) => state.orderList
);

export const selectOrderLoading = createSelector(
  selectOrderState,
  (state: OrderState) => state.loading
);

export const selectOrderError = createSelector(
  selectOrderState,
  (state: OrderState) => state.error
);

export const selectCurrentOrderStatus = createSelector(
  selectOrderState,
  (state: OrderState) => state.currentOrderStatus
);