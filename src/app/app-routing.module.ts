import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  { path: "", pathMatch: 'full', component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brands/:brandId", component: CarComponent },
  { path: "cars/colors/:colorId", component: CarComponent },
  { path: "cars/detail/:carId", component: CardetailComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
