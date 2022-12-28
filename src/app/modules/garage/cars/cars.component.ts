import { Component } from "@angular/core";
import { StockCarBrasilCorollaMock } from "src/app/shared/models/car.model";

@Component({
  selector: 'cars-garage',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.scss']
})

export class CarsComponent {

  mockCar = StockCarBrasilCorollaMock;

  constructor() {}
}
