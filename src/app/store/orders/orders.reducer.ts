//import { } from '@ngrx/store';
import { State, StoreModule, createReducer, on } from '@ngrx/store';
import { initialOrderState,OrderItem, OrderState } from './orders.status';
import{addBeverage, addFood, addHotel, addHotelExpenses, addOrder, addTravelExpenses, clearHotelexpense, loadOrders, 
  loadOrdersFailure, loadOrdersSuccess,removeHotelExpenseById,removeTravelExpenseById,setCurrentOrderStatus,updateHotel} from "./orders.actions"
import * as uuid from 'uuid';

export const initialState: OrderState[]=[];

export const orderReducer = createReducer(
  initialOrderState,
  on(loadOrders, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orderList: orders,
    loading: false,
  })),
  on(loadOrdersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(addOrder, (state, { order }) => ({
    ...state,
    orderList: [...state.orderList, order],
  })),
  on(addHotel, (state, { order }) => ({
    ...state,
    hotelList: [...state.hotelList, order],
  })),
  on(addFood, (state, { order }) => ({
    ...state,
    foodList: [...state.foodList, order],
  })),
  on(addBeverage, (state, { order }) => ({
    ...state,
    beverageList: [...state.beverageList, order],
  })),
  // on(updateOrder, (state, { order }) => ({
  //   ...state,
  //   loading: false,
  //   customerId:state.customerId,
  //   orderUniqueId:uuid.v4(),
  //   orderDate:new Date().toDateString(),
  //   totalPrice:state.totalPrice + order.price,
  //   currentOrderStatus:"pending",
  //   error:null,
  //   orderList: state.orderList.map(existingOrder =>
  //     existingOrder.productId === order.productId ? { ...existingOrder, ...order } : existingOrder
  //   ),
  // })),
  on(setCurrentOrderStatus, (state, { status }) => ({
    ...state,
    currentOrderStatus: status,
  })),
  on(addHotelExpenses, (state, { expense }) => ({
    ...state,
    totalHotelExpenses:state.totalHotelExpenses+expense
  })),
  on(removeHotelExpenseById, (state, { id }) => {
    // Find the expense to be removed
    const expenseToRemove = state.hotelList.find(expense => expense.hotelId=== id);
    
    if (!expenseToRemove) {
      return state; // return unchanged state if expense not found
    }
  
    // Calculate new total
    const newTotal = state.totalHotelExpenses - expenseToRemove.price;
    
    // Return new state
    return {
      ...state,
      hotelList: state.hotelList.filter(hotel => hotel.hotelId !== id),
      hotelExpenses: state.hotelList.filter(expense => expense.hotelId !== id),
      totalHotelExpenses: newTotal
    };
  }),
  on(addTravelExpenses, (state, { expense }) => ({
    ...state,
    totalTravelExpenses:state.totalTravelExpenses+expense
  })),
  on(removeTravelExpenseById, (state, { id }) => {
    // Find the expense to be removed
    const expenseToRemove = state.orderList.find(expense => expense.productId=== id);
    
    if (!expenseToRemove) {
      return state; // return unchanged state if expense not found
    }
  
    // Calculate new total
    const newTotal = state.totalTravelExpenses - (0);
    
    // Return new state
    return {
      ...state,
      orderList: state.orderList.filter(travel =>travel.productId  !== id),
      //hotelExpenses: state.hotelList.filter(expense => expense.hotelId !== id),
      totalTravelExpenses: newTotal
    };
  }),
  on(clearHotelexpense, (state) => ({
    ...state,     
    totalHotelExpenses: 0,
    totalBeverageExpenses:0,
    totalFoodExpenses:0,
    totalTravelExpenses:0      
  })),

  // Update Order Status
  /**
   * export interface OrderState {
  orderUniqueId: string;
  orderList: OrderItem[];
  customerId: string;
  orderDate: string;
  totalPrice: number;
  currentOrderStatus: string;
  loading: boolean;
  error: string | null;
}
   
  on(updateOrder, (state, { order }) => ({
    ...state,
    loading: false,
    customerId:order.customerId,
    orderUniqueId:new Date().toDateString()+state.orderUniqueId,
    orderDate:new Date().toDateString(),
    totalPrice:state.totalPrice + order.totalPrice,
    currentOrderStatus:"pending",
    error:null,
    orderList: state.orderList.map(existingOrder =>
      existingOrder.productId === order.productId ? { ...existingOrder, ...order } : existingOrder
    )
  }))
  ,
  on(updateOrderStatusFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Cancel Order
  on(cancelOrder, state => ({
    ...state,
    loading: true,
    error: null
  })),*/
  /*
  on(cancelOrderSuccess, (state, { orderId }) => ({
    ...state,
    loading: false,
    orderList: state.orderList.map(order =>
      order.orderId === orderId ? { ...order, status: 'cancelled' } : order
    ),
    currentOrderStatus: 'cancelled'
  })),*/
  /*
  on(cancelOrderFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Other Actions
  on(clearOrderError, state => ({
    ...state,
    error: null
  })),
  on(resetOrderState, () => initialOrderState)
);*/
)