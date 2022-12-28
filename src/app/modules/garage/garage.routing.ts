import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaragePage } from './garage.page';

export const routes: Routes = [
  {
    path: '',
    component: GaragePage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GarageRouting {}
