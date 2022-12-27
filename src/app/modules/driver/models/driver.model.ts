import { DifficultyEnum } from 'src/app/shared/utils/enums/difficulty.enum';
import { RaceLengthEnum } from 'src/app/shared/utils/enums/race-length.enum';

export interface Driver {
  id?: number;
  name: string;
  difficulty: DifficultyEnum;
  raceLength: RaceLengthEnum;
}
