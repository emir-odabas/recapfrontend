import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';


import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';

import { CarImage } from 'src/app/models/image';
import { BrandService } from 'src/app/services/brand.service';

import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDetail[];
  carImages: CarImage[];

  baseUrl = "https://localhost:44361/Uploads/Images/"
  imagePath: string;


  filterText = "";
  brands: Brand[] = [];
  colors: Color[] = [];

  brandFilter: number = 0;
  colorFilter: number = 0;
  cardetailFilter = '';

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private colorService: ColorService,
    private brandService: BrandService,
    private carDetailService: CarDetailService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();

    this.activatedRoute.params.subscribe(params => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      }
      else {
        this.getCars();
        this.getCarDetails();
        this.image;
      }
    })
  }
  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe(response => { this.cars = response.data })
  }

  getCars() {
    this.carService.getCars().subscribe(response => { this.cars = response.data });
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => { this.brands = response.data });
  }
  getColors() {
    this.colorService.getColors().subscribe(response => { this.colors = response.data });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsbyBrandId(brandId).subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data;
    })
  }

  // getSelectedBrand(brandId: number) {
  //   debugger;
  //   if (this.brandFilter == brandId) return true;
  //   else return false;
  // }

  // getSelectedColor(colorId: number) {
  //   if (this.colorFilter == colorId) return true;
  //   else return false;
  // }

  addToCard(car: Car) {
    // if (product.productId === 1) {
    //   this.toastrService.error("Hata", "Bu ürün sepete eklenemez")
    // } else {
    //   this.toastrService.success("sepete eklendi", product.productName)
    // }

  }

  image(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      const imagePath = response.data[0].imagePath
      this.imagePath = this.baseUrl + imagePath;
      console.log(this.imagePath)
    })
    return this.imagePath
  }

}

