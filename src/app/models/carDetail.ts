import { CarImage } from "./carImage";

export interface CarDetail {
    carId: number;
    brandName: string;
    colorName: string;
    carName: string;
    modelYear: number;
    dailyPrice: number;
    description: string;
    carImage: CarImage[];
}