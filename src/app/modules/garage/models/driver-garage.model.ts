import { Car } from 'src/app/shared/models/car.model';

export interface DriverGarageCar {
  id?: number;
  car: Car;
  raceEntries: number;
  raceFinishes: number;
  raceWins: number;
}
