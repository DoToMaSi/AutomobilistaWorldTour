export enum CarClassEnum {
  StockCarBrasil2022 = 1,
  StockCarBrasil2021 = 2,
  StockCarBrasil2020 = 3,
  StockCarBrasil2019 = 4,
  GT5 = 5,
  GT4 = 6,
  GT3 = 7,
  GTE = 8,
  GTOpen = 9,
  P1 = 10,
  P2 = 11,
  P3 = 12,
  P4 = 13,
  DPi = 14,
  GroupC = 15,
  F3 = 16,
  FClassicGen1 = 17,
  FClassicGen2 = 18,
  FClassicGen3 = 19,
  FRetroGen1 = 20,
  FRetroGen2 = 21,
  FRetroGen3 = 22,
  FTrainer = 23,
  FTrainerAdv = 24,
  FV10Gen1 = 25,
  FV10Gen2 = 26,
  FReiza = 28,
}

export const CarClassEnumLabel = new Map<CarClassEnum, string>([
  [CarClassEnum.StockCarBrasil2022, 'Stock Car Brasil 2022']
])
