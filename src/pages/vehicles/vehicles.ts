import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailsVehiclePage } from  '../details-vehicle/details-vehicle'

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

	vehicles = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad vehiclePage');
    this.swapiProvider.listVehicles().subscribe(data => {
    this.vehicles = data;
    });
   }

   vehicleSelected(vehicle) {    
    const idVehicle = vehicle.url.slice('https://swapi.co/api/vehicles/'.length, -1);
    this.navCtrl.push(DetailsVehiclePage, { idVehicle: idVehicle});
  }
}
