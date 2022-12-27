import { NgModule } from '@angular/core';
import { DriverRoutingModule } from './driver.routing';

import { CoreModule } from 'src/app/core/core.module';
import { DriverFormPage } from './driver-form/driver-form.page';

@NgModule({
  declarations: [
    DriverFormPage
  ],
  imports: [
    CoreModule,
    DriverRoutingModule
  ],
})

export class DriverModule { }
