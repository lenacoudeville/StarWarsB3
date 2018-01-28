import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-film',
  templateUrl: 'details-film.html',
})
export class DetailsFilmPage {

  film;
  idFilm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idFilm = navParams.get('idFilm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsFilm');
    this.swapiProvider.getFilm(this.idFilm).subscribe(data => {
      this.film = data;
    });    
    /*
    this.film.characters.forEach(element => {
      const idPeople = element.slice('https://swapi.co/api/people/'.length, -1);
      this.film.nameList = this.swapiProvider.getCharacter(idPeople);
      console.log(this.film.nameList);
    });
    */
    
  }
}
