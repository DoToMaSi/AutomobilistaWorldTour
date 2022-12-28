import { Event } from "./event.model";

export interface Championship {
  championshipId: number;
  championshipName: string;
  entries?: number;
  events: Event[];
  finishingPosition: number;
  experiencePool?: Map<number, number>;
  prizePool?: Map<number, number>;
}
