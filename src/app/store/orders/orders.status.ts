export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
}

export interface HotelItem{
    hotelId: string;
    hotelName:string,
    address:string,
    avaliableRooms:number,
    img:string,
    numOfStars:number,
    package:string[],

}

export interface OrderState {
  orderUniqueId: string;
  orderList: OrderItem[];
  hotelList:HotelItem[];
  customerId: string;
  orderDate: string;
  totalPrice: number;
  currentOrderStatus: string;
  loading: boolean;
  error: string | null;
}

export const initialOrderState: OrderState = {
  orderUniqueId: '',
  orderList: [],
  hotelList:[],
  customerId: '',
  orderDate: '',
  totalPrice: 0,
  currentOrderStatus: 'pending',
  loading: false,
  error: null
};