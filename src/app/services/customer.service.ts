import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44361/api/'


  constructor(private HttpCLient: HttpClient) { }
  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getall"
    return this.HttpCLient.get<ListResponseModel<Customer>>(newPath);

  }
  // getCustomerByUserId(userId: number): Observable<ListResponseModel<Customer>> {
  //   let newPath = this.apiUrl + "Customers/getbyuserid?userId=" + userId;
  //   return this.HttpCLient.get<ListResponseModel<Customer>>(newPath);
  // }


  // //bir şekilde customer ekleyebilmeliyiz
  // addCustomer(customer: Customer): Observable<ResponseModel> {
  //   return this.HttpCLient.post<ResponseModel>(this.apiUrl + "Customers/Add", customer)
  // }

  // updateCustomer(customer: Customer): Observable<ResponseModel> {
  //   return this.HttpCLient.post<ResponseModel>(this.apiUrl + "Customers/Update", customer)
  // }
}
