import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44361/api/";

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getcardetails`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path)
  }

  getCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbybrandid?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarDetailByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbycolorid?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarDetailByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailsbyid?id=${carId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
}