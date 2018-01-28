import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailsPlanetPage } from  '../details-planet/details-planet'

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {

	planets = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetPage');
    this.swapiProvider.listPlanets().subscribe(data => {
    this.planets = data;
    });
   }

   planetSelected(planet) {    
    const idPlanet = planet.url.slice('https://swapi.co/api/planets/'.length, -1);
    this.navCtrl.push(DetailsPlanetPage, { idPlanet: idPlanet});
  }
}
