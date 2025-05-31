//import { } from '@ngrx/store';
import { State, StoreModule, createReducer, on } from '@ngrx/store';
import { initialOrderState,OrderItem, OrderState } from './orders.status';
import{addBeverage, addBeverageExpenses, addFood, addFoodExpenses, addHotel, addHotelExpenses, addOrder, addTravelExpenses, clearHotelexpense, loadOrders,
  loadOrdersFailure, loadOrdersSuccess,removeBeverageExpenseById,removeFoodExpenseById,removeHotelExpenseById,removeTravelExpenseById,setCurrentOrderStatus,setTotalExpenses} from "./orders.actions"
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
    const newTotal = state.totalTravelExpenses - expenseToRemove.price;

    // Return new state
    return {
      ...state,
      orderList: state.orderList.filter(travel =>travel.productId  !== id),
      //hotelExpenses: state.hotelList.filter(expense => expense.hotelId !== id),
      totalTravelExpenses: newTotal
    };
  }),
  on(addFoodExpenses, (state, { expense }) => ({
    ...state,
    totalFoodExpenses:state.totalFoodExpenses+expense
  })),
  on(removeFoodExpenseById, (state, { id }) => {
    // Find the expense to be removed
    console.log("Hiiii");
    const expenseToRemove = state.foodList.find(expense => expense.foodId=== id);

    if (!expenseToRemove) {
      return state; // return unchanged state if expense not found
    }
    // Calculate new total
    var newTotal = state.totalTravelExpenses -expenseToRemove.price;
    if(newTotal<0){
      newTotal=0
    }

    return {
      ...state,
      foodList: state.foodList.filter(food =>food.foodId  !== id),
      totalFoodExpenses: newTotal
    };
  }),

  on(addBeverageExpenses, (state, { expense }) => ({
    ...state,
    totalBeverageExpenses:state.totalBeverageExpenses+expense
  })),
  on(removeBeverageExpenseById, (state, { id }) => {
    // Find the expense to be removed
    const expenseToRemove = state.beverageList.find(expense => expense.idDrink=== id);
    console.log(id);

    if (!expenseToRemove) {
      return state; // return unchanged state if expense not found
    }

    // Calculate new total
    var newTotal = state.totalBeverageExpenses - expenseToRemove.price;
    if(newTotal<0){
      newTotal=0
    }

    // Return new state
    return {
      ...state,
      beverageList: state.beverageList.filter(beverage =>beverage.idDrink!== id),
      //hotelExpenses: state.hotelList.filter(expense => expense.hotelId !== id),
      totalBeverageExpenses: newTotal
    };
  }),

  on(clearHotelexpense, (state) => ({
    ...state,
    totalHotelExpenses: 0,
    totalBeverageExpenses:0,
    totalFoodExpenses:0,
    totalTravelExpenses:0
  })),

  on(setTotalExpenses, (state) => ({
    ...state,
    totalExpense:state.totalBeverageExpenses+state.totalFoodExpenses+state.totalHotelExpenses+state.totalTravelExpenses
  })),
)
