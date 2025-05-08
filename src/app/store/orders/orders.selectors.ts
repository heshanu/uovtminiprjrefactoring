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

export const selectOrderHotelsListDetails  = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState.hotelList
);

export const selectOrderTravelsListDetails  = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState.orderList
);

export const selectOrderBeverageListDetails  = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState.beverageList
);

export const selectOrderFoodsListDetails  = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState.foodList
);

export const selectHotelExpenses=createSelector(
  selectOrderState,
  (exp:OrderState)=>exp.totalHotelExpenses
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

export const getHotelExpenseValue=createSelector(
  selectOrderState,
  (state: OrderState) => state.totalHotelExpenses
)