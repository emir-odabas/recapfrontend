import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private httpClient: HttpClient) { }

    apiUrl = "https://localhost:44361/api/"

    getImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
        let path = `${this.apiUrl}CarImages/getbyid?carId=${carId}`;
        return this.httpClient.get<ListResponseModel<CarImage>>(path);
    }
}