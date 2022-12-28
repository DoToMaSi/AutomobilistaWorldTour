import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./modules/driver/driver.module').then( m => m.DriverModule)
  },
  {
    path: 'world-map',
    loadChildren: () => import('./modules/world-map/world-map.module').then( m => m.WorldMapPageModule)
  },
  {
    path: 'garage',
    loadChildren: () => import('./modules/garage/garage.module').then( m => m.GarageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
