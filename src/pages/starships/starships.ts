import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailsStarshipPage } from  '../details-starship/details-starship'

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

	starships = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad starshipPage');
    this.swapiProvider.listStarships().subscribe(data => {
    this.starships = data;
    });
   }

   starshipSelected(starship) {    
    const idStarship = starship.url.slice('https://swapi.co/api/starships/'.length, -1);
    this.navCtrl.push(DetailsStarshipPage, { idStarship: idStarship});
  }
}
