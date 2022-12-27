import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldMapPageRoutingModule } from './world-map-routing.module';

import { WorldMapPage } from './world-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldMapPageRoutingModule
  ],
  declarations: [WorldMapPage]
})
export class WorldMapPageModule {}
