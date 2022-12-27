import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverFormPage } from './driver-form/driver-form.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-driver' },
  { path: 'create-driver', component: DriverFormPage },
  { path: 'edit-driver/:id', component: DriverFormPage },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule {}
