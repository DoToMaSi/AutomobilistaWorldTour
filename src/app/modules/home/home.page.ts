import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomePage {

  constructor(private navCtrl: NavController) {}

  createDriver() {
    this.navCtrl.navigateForward('driver/create-driver');
  }
}
