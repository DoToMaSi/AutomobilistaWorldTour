import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CarBrandEnumLabel } from 'src/app/shared/enums/vehicle/car-brand.enum';
import { CarClassEnumLabel } from 'src/app/shared/enums/vehicle/car-class.enum';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'awt-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarItemComponent implements OnInit {

  @Input() car: Car | null = null;
  carClassLabel = CarClassEnumLabel;
  carBrandLabel = CarBrandEnumLabel;
  context: 'garage' | 'dealership' = 'garage';

  onSell = new EventEmitter();
  onBuy = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
