import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/image';
import { CardetailService } from 'src/app/services/car-detail.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails: CarDetail[] = []
  images: CarImage[] = []
  dataLoaded = false;

  constructor(
    private cardetailService: CardetailService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailByCarId(params["carId"])
        this.getImagesByCarId();
      }
    })
  }

  getCarDetailByCarId(carId: number) {
    this.cardetailService.getCarDetailByCarId(carId).subscribe(response => {
      console.log(response);
      this.carDetails = response.data;
    })
  }

  getImagesByCarId() {
    this.imageService.getImagesByCarId(this.activatedRoute.snapshot.params["carId"]).subscribe(response => {
      this.images = response.data;
    })
  }
}