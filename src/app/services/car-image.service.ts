import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
    providedIn: 'root'
})
export class CarImageService {

    apiUrl = "https://localhost:44361/api/";

    constructor(private httpClient: HttpClient) { }

    // getCurrentCarImages(carId: number): Observable<ListResponseModel<CarImage>> {
    //     let newPath = this.apiUrl + "carImages/getbycarid?carId=" + carId;
    //     return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
    // }

    // getImages(): Observable<ListResponseModel<CarImage>> {
    //     return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
    // }
    getCarImageById(carId: number): Observable<ListResponseModel<CarImage>> {
        let newPath = this.apiUrl + "carImages/getbycarid?carId=" + carId
        return this.httpClient.get<ListResponseModel<CarImage>>(newPath)

    }



}