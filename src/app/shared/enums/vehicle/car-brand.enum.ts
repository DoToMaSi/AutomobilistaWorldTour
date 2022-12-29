export enum CarBrandEnum {
  Toyota = 1,
  Chevrolet = 2,
  Reiza = 3,
  Volkswagen = 4,
  Porsche = 5,
  MercedesBenz = 6,
  BMW = 7,
  McLaren = 8,
  Brabham = 9,
  Lotus = 10,
  Metalmoro = 11,
  Sigma = 12,
  Puma = 13,
  Reynard = 14,
  Lola = 15,
  Swift = 16,
  Mitsubishi = 17,
  Ginetta = 18,
  Cadillac = 19,
  MAN = 20,
  Volvo = 21,
  Iveco = 22,
  Scania = 23,
  Fiat = 24,
  Caterham = 25
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
