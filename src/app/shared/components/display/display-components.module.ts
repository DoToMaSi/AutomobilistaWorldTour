import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { WorldTourIconComponent } from "./world-tour-icon/world-tour-icon.component";

@NgModule({
  declarations: [
    WorldTourIconComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    WorldTourIconComponent
  ]
})

export class DisplayComponentsModule {}
