import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[]

  constructor(private activatedRouter: ActivatedRoute,
    private carImageService: CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImageById(params["carId"])
      }
    })
  }

  getCarImageById(carId: number) {
    this.carImageService.getCarImageById(carId).subscribe(response => {
      this.carImages = response.data
      console.log(this.carImages);
    })
  }

  // getImages() {
  //   this.carImageService.getImages().subscribe(response => {
  //     this.carImages = response.data
  //   })
  // }

  // getImageSource(carImage: CarImage): string {
  //   let url: string = "https://localhost:44361/api/" + carImage.imagePath;
  //   return url;
  // }

  // getCurrentCarImage(carId: number) {
  //   this.carImageService.getCurrentCarImages(carId).subscribe(response => {
  //     this.carImages = response.data
  //   })
  // }

  // getCarDetail(id: number) {
  //   this.carService.getCarDetailById(id).subscribe(reponse => {
  //     this.carDetail = reponse.data;
  //   })}

}


