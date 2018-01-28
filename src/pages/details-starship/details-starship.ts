import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-starship',
  templateUrl: 'details-starship.html',
})
export class DetailsStarshipPage {

  starship;
  idStarship;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idStarship = navParams.get('idStarship');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsStarship');
    this.swapiProvider.getStarship(this.idStarship).subscribe(data => {
      this.starship = data;
      console.log(this.starship);
    });
    
  }
}
