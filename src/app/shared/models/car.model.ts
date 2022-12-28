import { CarClassEnum } from "../enums/car-class.enum";

export interface Car {
  carOwnershipId?: number;
  brand: string;
  model: string;
  year: string;
  carClass: CarClassEnum;
  basePrice: number;
}

export const StockCarBrasilCorollaMock: Car = {
  brand: 'Toyota',
  model: 'Corolla Stock Car',
  year: '2022',
  carClass: CarClassEnum.StockCarBrasil2022,
  basePrice: 350000
}
