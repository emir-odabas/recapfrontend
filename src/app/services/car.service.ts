import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44361/api/Cars/getall";

  constructor(private httpCLient: HttpClient) { }
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpCLient.get<ListResponseModel<Car>>(newPath);
  }



  getCarsbyBrand(brandName: string): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrandname?brandName=" + brandName
    return this.httpCLient.get<ListResponseModel<Car>>(newPath);
  }



}
