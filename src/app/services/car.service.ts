import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44361/api/";

  constructor(private httpCLient: HttpClient) { }
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpCLient.get<ListResponseModel<Car>>(newPath);
  }



  getCarsbyBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrandid?id=" + brandId;
    return this.httpCLient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbycolorid?id=" + colorId;
    return this.httpCLient.get<ListResponseModel<Car>>(newPath);
  }

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<Car>> {
    let newUrl: string = this.apiUrl + "carsImage/getbycarid?carId=" + carId;
    return this.httpCLient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarById(id: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbyid?id=' + id;
    return this.httpCLient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
    return this.httpCLient.get<ListResponseModel<CarDetail>>(newPath);
  }



}
