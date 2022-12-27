import { DifficultyEnum } from 'src/app/shared/utils/enums/difficulty.enum';

export interface Driver {
  id?: number;
  name: string;
  difficulty: DifficultyEnum;
}
