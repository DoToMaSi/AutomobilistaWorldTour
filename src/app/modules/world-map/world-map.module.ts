import { NgModule } from '@angular/core';
import { WorldMapPageRoutingModule } from './world-map-routing.module';
import { WorldMapPage } from './world-map.page';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayComponentsModule } from 'src/app/shared/components/display/display-components.module';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';

@NgModule({
  imports: [
    CoreModule,
    CoreComponentsModule,
    SharedModule,
    DisplayComponentsModule,
    WorldMapPageRoutingModule
  ],
  declarations: [WorldMapPage]
})
export class WorldMapPageModule {}
