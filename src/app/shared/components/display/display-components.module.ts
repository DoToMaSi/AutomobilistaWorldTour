import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { CarItemComponent } from "./car-item/car-item.component";
import { WorldTourIconComponent } from "./world-tour-icon/world-tour-icon.component";

@NgModule({
  declarations: [
    WorldTourIconComponent,
    CarItemComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    WorldTourIconComponent,
    CarItemComponent
  ]
})

export class DisplayComponentsModule {}
