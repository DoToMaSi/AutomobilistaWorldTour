export enum CarBrandEnum {
  Toyota = 1
}

export const CarBrandEnumLabel = new Map<CarBrandEnum, string>([
  [CarBrandEnum.Toyota, 'Toyota']
])

export function CarBrandSelect() {
  return [...CarBrandEnumLabel].map((brand) => {
    return {
      value: brand[0],
      label: brand[1]
    }
  })
}
