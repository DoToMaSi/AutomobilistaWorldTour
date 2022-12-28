import { NgModule } from "@angular/core";
import { CoreComponentsModule } from "src/app/core/components/core-components.module";
import { CoreModule } from "src/app/core/core.module";
import { DisplayComponentsModule } from "src/app/shared/components/display/display-components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CarsComponent } from "./cars/cars.component";
import { GaragePage } from "./garage.page";
import { GarageRouting } from "./garage.routing";
import { StatsComponent } from "./stats/stats.component";

@NgModule({
  declarations: [
    GaragePage,
    CarsComponent,
    StatsComponent
  ],
  imports: [
    CoreModule,
    CoreComponentsModule,
    DisplayComponentsModule,
    GarageRouting,
    SharedModule
  ],
})

export class GarageModule {}
