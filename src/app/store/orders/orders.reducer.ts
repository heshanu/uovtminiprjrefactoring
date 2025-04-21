//import { } from '@ngrx/store';
import { State, StoreModule, createReducer, on } from '@ngrx/store';
import { initialOrderState,OrderItem, OrderState } from './orders.status';
import{addHotel, addOrder, loadOrders, loadOrdersFailure, loadOrdersSuccess,setCurrentOrderStatus,updateHotel,updateOrder} from "./orders.actions"
import * as uuid from 'uuid';

export const initialState: OrderState[] = [];

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
  on(updateOrder, (state, { order }) => ({
    ...state,
    loading: false,
    customerId:state.customerId,
    orderUniqueId:uuid.v4(),
    orderDate:new Date().toDateString(),
    totalPrice:state.totalPrice + order.price,
    currentOrderStatus:"pending",
    error:null,
    orderList: state.orderList.map(existingOrder =>
      existingOrder.productId === order.productId ? { ...existingOrder, ...order } : existingOrder
    ),
  })),
  on(setCurrentOrderStatus, (state, { status }) => ({
    ...state,
    currentOrderStatus: status,
  }))



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