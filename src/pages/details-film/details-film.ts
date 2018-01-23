import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-film',
  templateUrl: 'details-film.html',
})
export class DetailsFilmPage {

	films = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsFilm');
    this.swapiProvider.listFilms().subscribe(data => {
    this.films = data;
    });
  }
}
