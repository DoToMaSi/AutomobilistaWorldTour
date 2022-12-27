import { NgModule } from '@angular/core';
import { WorldMapPageRoutingModule } from './world-map-routing.module';
import { WorldMapPage } from './world-map.page';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    WorldMapPageRoutingModule
  ],
  declarations: [WorldMapPage]
})
export class WorldMapPageModule {}
