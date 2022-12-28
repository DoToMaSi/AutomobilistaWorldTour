import { PracticeSession } from "./practice-session.model";
import { QualifySession } from "./qualify-session.model";
import { Race } from "./race.model";

export interface Event {
  eventId: number;
  trackId: number;
  startingDate: string;
  entries: number;
  eventName?: string;
  practice?: PracticeSession;
  qualify?: QualifySession;
  qualifyPosition?: number;
  race: Race;
  finishingPosition?: number;
  race2?: Race;
  experiencePool?: Map<number, number>;
  prizePool?: Map<number, number>;
}
