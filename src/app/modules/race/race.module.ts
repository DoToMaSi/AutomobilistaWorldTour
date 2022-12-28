import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RaceRouting } from "./race.routing";

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    SharedModule,
    RaceRouting
  ],
})

export class RaceModule { }
