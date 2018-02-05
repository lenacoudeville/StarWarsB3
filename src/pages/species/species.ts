import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailsSpeciePage } from  '../details-specie/details-specie'

@IonicPage()
@Component({
  selector: 'page-species',
  templateUrl: 'species.html',
})
export class SpeciesPage {

	species = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad speciePage');
    this.swapiProvider.listSpecies().subscribe(data => {
    this.species = data;
    });
   }

   specieSelected(specie) {    
    const idSpecie = specie.url.slice('https://swapi.co/api/species/'.length, -1);
    this.navCtrl.push(DetailsSpeciePage, { idSpecie: idSpecie});
  }
}
