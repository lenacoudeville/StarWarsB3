import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-specie',
  templateUrl: 'details-specie.html',
})
export class DetailsSpeciePage {

  specie;
  idSpecie;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idSpecie = navParams.get('idSpecie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsSpecie');
    this.swapiProvider.getSpecie(this.idSpecie).subscribe(data => {
      this.specie = data;
    });
    
  }
}
