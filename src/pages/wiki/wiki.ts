import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { FilmsPage } from  '../films/films'
import { CharactersPage } from '../characters/characters';

@IonicPage()
@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
})
export class WikiPage {

	wiki;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WikiPage');
    //this.swapiProvider.listFilms().subscribe(data => {
    //this.wiki = data;
    //});
   }

  filmsList() {
    this.navCtrl.push(FilmsPage);
  }

  charactersList() {
    this.navCtrl.push(CharactersPage);
  }

  planetsList() {
    this.navCtrl.push(CharactersPage);
  }

  speciesList() {
    this.navCtrl.push(CharactersPage);
  }

  starshipsList() {
    this.navCtrl.push(CharactersPage);
  }

  vehiclesList() {
    this.navCtrl.push(CharactersPage);
  }
}