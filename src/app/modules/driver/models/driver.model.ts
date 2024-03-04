import { DifficultyEnum } from 'src/app/shared/utils/enums/difficulty.enum';
import { RaceLengthEnum } from 'src/app/shared/utils/enums/race-length.enum';
import { DriverGarageCar } from '../../garage/models/driver-garage.model';
import { DriverStats } from './driver-stats.model';

export interface Driver {
  id?: number;
  name: string;
  difficulty: DifficultyEnum;
  raceLength: RaceLengthEnum;
  credits: number;
  experience: number;
  driverStats: DriverStats;
  garage: DriverGarageCar[];
}

export function getDriverLevel(driver: Driver) {
  const baseExp = 600;

  const multiplier = ((driver.experience || 0) / (baseExp));

  return multiplier;
}
