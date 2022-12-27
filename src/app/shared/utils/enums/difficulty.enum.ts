export enum DifficultyEnum {
  Beginner = 1,
  Amateur = 2,
  Clubman = 3,
  Professional = 4,
  Veteran = 5,
}

export const DifficultyEnumLabel = new Map<DifficultyEnum, string>([
  [DifficultyEnum.Beginner, 'Beginner (Very Easy)'],
  [DifficultyEnum.Amateur, 'Amateur (Easy)'],
  [DifficultyEnum.Clubman, 'Clubman (Normal)'],
  [DifficultyEnum.Professional, 'Professional (Hard)'],
  [DifficultyEnum.Veteran, 'Veteran (Expert)'],
]);

export function DifficultySelect() {
  return [...DifficultyEnumLabel].map((difficulty) => {
    return {
      value: difficulty[0],
      label: difficulty[1],
    }
  })
}

export function DifficultyDescription(difficulty: DifficultyEnum) {
  switch (difficulty) {
    default:
    case DifficultyEnum.Beginner:
      return {
        difficulty: '70 - 77%',
        aggression: 'Low'
      };

    case DifficultyEnum.Amateur:
      return {
        difficulty: '78 - 84%',
        aggression: 'Low'
      };

    case DifficultyEnum.Clubman:
      return {
        difficulty: '85 - 94%',
        aggression: 'Low or Medium'
      };

    case DifficultyEnum.Professional:
      return {
        difficulty: '95 - 104%',
        aggression: 'Low to High'
      };

    case DifficultyEnum.Veteran:
      return {
        difficulty: '95 - 104%',
        aggression: 'Any (Recommended: Medium or higher)'
      };
  }
}
