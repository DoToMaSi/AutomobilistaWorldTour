import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldMapPage } from './world-map.page';

const routes: Routes = [
  {
    path: '',
    component: WorldMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldMapPageRoutingModule {}
