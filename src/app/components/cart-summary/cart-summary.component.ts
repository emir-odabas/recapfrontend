import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {


  cartItems: CartItem[];

  constructor(private cartService: CarService, private toastrService: ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(car: Car) {
    this.cartService.removeFromCart(car);
    this.toastrService.error("Silindi", car.description + "Sepetten silindi.")
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }
}
