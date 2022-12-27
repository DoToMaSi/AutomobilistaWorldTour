export enum RaceLengthEnum {
  Short = 1,
  Medium = 2,
  Long = 3,
  Real = 4,
}

export const RaceLengthEnumLabel = new Map<RaceLengthEnum, string>([
  [RaceLengthEnum.Short, 'Short'],
  [RaceLengthEnum.Medium, 'Medium'],
  [RaceLengthEnum.Long, 'Long'],
  [RaceLengthEnum.Real, 'Real'],
]);

export function RaceLengthSelect() {
  return [...RaceLengthEnumLabel].map((raceLength) => {
    return {
      value: raceLength[0],
      label: raceLength[1],
    }
  })
}

export function RaceLengthDescription(raceLength: RaceLengthEnum) {
  switch (raceLength) {
    default:
    case RaceLengthEnum.Short:
      return 'Races will be short, around 15% to 25% of their original distance (i.e. 5 to 10 minute races)';

    case RaceLengthEnum.Medium:
      return 'Races will have a medium duration, around 50% of their original distance (i.e. 30 minute races)';

    case RaceLengthEnum.Long:
      return 'Races will have a longer duration, around 75% of their original distance (i.e. 1 hour races)';

    case RaceLengthEnum.Real:
      return `Races will be close to their real duration, so expect very lengthy races when tackling higher category motorsports and endurace events.
      (Note that some endurace races will be shortened, such as the 24 hours events will be 2.4 hours with accelerated time - you are, however, free to do
        the entirety of those 24 hours if you wish to do so - at your own risk!)`;
  }
}
