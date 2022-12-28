import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'awt-world-map',
  templateUrl: './world-map.page.html',
  styleUrls: ['./world-map.page.scss'],
})
export class WorldMapPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  accessGarage() {
    this.navCtrl.navigateForward('garage');
  }
}
