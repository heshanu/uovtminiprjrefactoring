export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
}

export interface HotelItem{
    hotelId: string;
    hotelName:string;
    address:string;
    avaliableRooms:number;
    img:string;
    numOfStars:number;
    package:string[];
    price:number;
    quantity:number

}

export interface FoodItem{
    foodId:number;
    name:string;
    image:string;
    ingredients:string[];
    price:number;
    quantity:number;
 
}

export interface BeverageItem{
    idDrink:string;
    strDrink:string;
    strInstructions:string;
    price:number;
    quantity:number;
}

export interface OrderState {
  orderUniqueId: string;
  orderList: OrderItem[];
  hotelList:HotelItem[];
  foodList:FoodItem[];
  beverageList:BeverageItem[];
  customerId: string;
  orderDate: string;
  totalPrice: number;
  currentOrderStatus: string;
  loading: boolean;
  error: string | null;
  totalHotelExpenses:number;
  totalFoodExpenses:number;
  totalBeverageExpenses:number;
  totalTravelExpenses:number;
}

export const initialOrderState: OrderState = {
  orderUniqueId: '',
  orderList: [],
  hotelList:[],
  foodList:[],
  beverageList:[],
  customerId: '',
  orderDate: '',
  totalPrice: 0,
  currentOrderStatus: 'pending',
  loading: false,
  error: null,
  totalHotelExpenses:0,
  totalFoodExpenses:0,
  totalBeverageExpenses:0,
  totalTravelExpenses:0
};