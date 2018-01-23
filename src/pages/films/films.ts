import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailsFilmPage } from  '../details-film/details-film'

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

	films = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
    this.swapiProvider.listFilms().subscribe(data => {
    this.films = data;
    });
   }

   filmSelected(film) {
    
    const idFilm = film.url.slice('https://swapi.co/api/films/'.length, -1);
    this.navCtrl.push(DetailsFilmPage, { idFilm: idFilm});
}
}
