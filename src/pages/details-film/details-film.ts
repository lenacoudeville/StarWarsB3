import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/**
 * Generated class for the WikiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-film',
  templateUrl: 'details_film.html',
})
export class DetailsFilm {

	films = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WikiPage');
    this.swapiProvider.listFilms().subscribe(data => {
    this.films = data;
    });
  }
}
