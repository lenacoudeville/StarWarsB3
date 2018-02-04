import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmsPage } from  '../films/films'
import { CharactersPage } from '../characters/characters';

import { SpeciesPage } from '../species/species';

import { StarshipsPage } from '../starships/starships';

import { PlanetsPage } from '../planets/planets';

import { VehiclesPage } from '../vehicles/vehicles';

@IonicPage()
@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
})
export class WikiPage {

	wiki;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WikiPage');
   }

  filmsList() {
    this.navCtrl.push(FilmsPage);
  }

  charactersList() {
    this.navCtrl.push(CharactersPage);
  }

  planetsList() {
    this.navCtrl.push(PlanetsPage);
  }

  speciesList() {
    this.navCtrl.push(SpeciesPage);
  }

  starshipsList() {
    this.navCtrl.push(StarshipsPage);
  }

  vehiclesList() {
    this.navCtrl.push(VehiclesPage);
  }
}