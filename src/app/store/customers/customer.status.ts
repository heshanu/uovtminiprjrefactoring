
import { CustomerdetailsInterface } from "../../model/customerDetailsInterface";

export interface CustomerState {
  customer: any | null;
  loading: boolean;
  error: any;
}

export const initialCustomerState: CustomerState = {
  customer:'',
  loading: false,
  error: null,
};

