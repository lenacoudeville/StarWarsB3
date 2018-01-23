import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-character',
  templateUrl: 'details-character.html',
})
export class DetailsCharacterPage {

  character;
  idCharacter;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idCharacter = navParams.get('idCharacter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsCharacter');
    this.swapiProvider.getFilm(this.idCharacter).subscribe(data => {
      this.character = data;
    });
  }
}
