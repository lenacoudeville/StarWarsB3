import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailsCharacterPage } from  '../details-character/details-character'

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {

	characters = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharactersPage');
    this.swapiProvider.listCharacters().subscribe(data => {
    this.characters = data;
    });
   }

   filmSelected(film) {
    
    const idCharacter = film.url.slice('https://swapi.co/api/films/'.length, -1);
    this.navCtrl.push(DetailsCharacterPage, { idCharacter: idCharacter});
  }
}
