export enum CarCategoryEnum {
  Club = 1,
  Formula = 2,
  Touring = 3,
  Prototype = 4,
  GT = 5,
  Kart = 6,
  StreetCar = 7
}

export const CarCategoryEnumLabel = new Map<CarCategoryEnum, string>([
  [CarCategoryEnum.Club, 'Club'],
  [CarCategoryEnum.Formula, 'Formula Open-Wheelers'],
  [CarCategoryEnum.Touring, 'Touring Car'],
  [CarCategoryEnum.Prototype, 'Prototypes'],
  [CarCategoryEnum.GT, 'GTs'],
  [CarCategoryEnum.Kart, 'Karts'],
  [CarCategoryEnum.StreetCar, 'Street Cars'],
])

export function CarCategorySelect() {
  return [...CarCategoryEnumLabel].map((category) => {
    return {
      value: category[0],
      label: category[1]
    }
  })
}
