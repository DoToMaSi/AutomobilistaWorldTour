import { NgModule } from '@angular/core';
import { DriverRoutingModule } from './driver.routing';

import { CoreModule } from 'src/app/core/core.module';
import { DriverFormPage } from './driver-form/driver-form.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DriverFormPage
  ],
  imports: [
    CoreModule,
    SharedModule,
    DriverRoutingModule
  ],
})

export class DriverModule { }
