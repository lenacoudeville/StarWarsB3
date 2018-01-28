import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage()
@Component({
  selector: 'page-details-vehicle',
  templateUrl: 'details-vehicle.html',
})
export class DetailsVehiclePage {

  vehicle;
  idVehicle;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idVehicle = navParams.get('idVehicle');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsVehicle');
    this.swapiProvider.getVehicle(this.idVehicle).subscribe(data => {
      this.vehicle = data;
    });
    
  }
}
