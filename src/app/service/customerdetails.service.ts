import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerdetailsInterface } from '../model/customerDetailsInterface';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsService {

  //private apiUrl = 'https://uovtminiprj-backend.vercel.app'
   private apiUrl='http://localhost:3000'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  registerCustomer(customer: CustomerdetailsInterface): Observable<CustomerdetailsInterface> {
    return this.http.post<CustomerdetailsInterface>(`${this.apiUrl}/createCustomer`, customer, { headers: this.headers });
  }

  getAllCustomers(): Observable<CustomerdetailsInterface[]> {
    return this.http.get<CustomerdetailsInterface[]>(`${this.apiUrl}/allCustomers`);
  }

  getDetailsByCustomerId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCustomerById/${id}`);
  }

   updateCustomer(customerId:any, totalExpense?: any, status?: string): Observable<any> {
    const updateData: any = {};
    if (totalExpense !== undefined) {
      updateData.totalExpense = totalExpense;
    }
    if (status !== undefined) {
      updateData.status = status;
    }
    return this.http.patch(`${this.apiUrl}/updateCustomer/${customerId}`, updateData);
  }

}
