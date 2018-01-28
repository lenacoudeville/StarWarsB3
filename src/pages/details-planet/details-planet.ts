import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-planet',
  templateUrl: 'details-planet.html',
})
export class DetailsPlanetPage {

  planet;
  idPlanet;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idPlanet = navParams.get('idPlanet');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPlanet');
    this.swapiProvider.getPlanet(this.idPlanet).subscribe(data => {
      this.planet = data;
    });
    
  }
}
