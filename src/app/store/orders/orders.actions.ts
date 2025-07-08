import { createAction, props } from '@ngrx/store';
import { BeverageItem, FoodItem, HotelItem, OrderItem, OrderState } from './orders.status';

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

export const addHotel = createAction(
  '[Order] Add Hotel',
  props<{ order: HotelItem }>()
);

export const addFood = createAction(
  '[Order] Add Food',
  props<{ order: FoodItem }>()
);

export const addBeverage = createAction(
  '[Order] Add Beverage',
  props<{ order: BeverageItem }>()
);

export const addHotelExpenses=createAction(
  "[Order] Added hotelExpenses",
  props<{expense:number}>()
);

export const removeHotelExpenseById=createAction(
  "[Order] Removed hotelExpenses from hotelexpense amount",
  props<{id:string}>()
);

export const addTravelExpenses=createAction(
  "[Order] Added Expenses",
  props<{expense:number}>()
);

export const removeTravelExpenseById=createAction(
  "[Order] Removed TravelExpenses from hotelexpense amount",
  props<{id:string}>()
);

export const updateTravelExpenses = createAction(
  "Updated with current travelExpenses",
  props<{expense:number}>()
)

export const addFoodExpenses=createAction(
  "[Order] Added Food Expenses",
  props<{expense:number}>()
)

export const removeFoodExpenseById=createAction(
  "[Order] Removed FoodsExpenses from food expense amount",
  props<{id:string}>()
);

export const addBeverageExpenses=createAction(
  "[Order] Added Beverage Expenses",
  props<{expense:number}>()
)

export const removeBeverageExpenseById=createAction(
  "[Order] Removed Beverage from food expense amount",
  props<{id:string}>()
);



export const clearHotelexpense=createAction(
  "clear hotel expenses",
)

export const updateOrder = createAction(
  '[Order] Update Order',
  props<{ order: OrderItem }>()
);

export const updateHotel = createAction(
  '[Order] Update Order',
  props<{ order: HotelItem }>()
);


export const setCurrentOrderStatus = createAction(
  '[Order] Set Current Order Status',
  props<{ status: string }>()
);

export const setTotalExpenses = createAction(
  '[Order] Set Total Expenses',
  props<{ expenses: number }>()
);


