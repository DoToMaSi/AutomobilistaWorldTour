import { CarBrandEnum } from "../enums/vehicle/car-brand.enum";
import { CarCategoryEnum } from "../enums/vehicle/car-category.enum";
import { CarClassEnum } from "../enums/vehicle/car-class.enum";

export interface Car {
  carOwnershipId?: number;
  brand: CarBrandEnum;
  model: string;
  year: string;
  carClass: CarClassEnum;
  carCategory: CarCategoryEnum;
  basePrice: number;
}

export const StockCarBrasilCorollaMock: Car = {
  brand: CarBrandEnum.Toyota,
  model: 'Corolla Stock Car',
  year: '2022',
  carClass: CarClassEnum.StockCarBrasil2022,
  carCategory: CarCategoryEnum.Touring,
  basePrice: 350000
}
