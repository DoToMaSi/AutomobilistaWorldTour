import { NgModule } from '@angular/core';
import { CoreModule } from '../core.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CoreModule
  ],
  exports: [HeaderComponent],
})

export class CoreComponentsModule {}
