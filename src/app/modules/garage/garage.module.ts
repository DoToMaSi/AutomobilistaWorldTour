import { NgModule } from "@angular/core";
import { CoreComponentsModule } from "src/app/core/components/core-components.module";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { GaragePage } from "./garage.page";
import { GarageRouting } from "./garage.routing";

@NgModule({
  declarations: [
    GaragePage
  ],
  imports: [
    CoreModule,
    CoreComponentsModule,
    GarageRouting,
    SharedModule
  ],
})

export class GarageModule {}
