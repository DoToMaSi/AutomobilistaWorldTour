import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CoreModule } from 'src/app/core/core.module';
import { HomePageRoutingModule } from './home.routing';

@NgModule({
  imports: [
    CoreModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
