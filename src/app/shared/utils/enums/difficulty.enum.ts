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
