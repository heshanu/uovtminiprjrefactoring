export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  orderId: string;
  customerId: string;
  items: OrderItem[];
  orderDate: string;
  price: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}
export interface OrderState {
  orderUniqueId: string;
  orderList: Order[];
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
  customerId: '',
  orderDate: '',
  totalPrice: 0,
  currentOrderStatus: 'pending',
  loading: false,
  error: null
};