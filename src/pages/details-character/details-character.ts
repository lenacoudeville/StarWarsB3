import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/* pages à importer */
import { DetailsPlanetPage } from '../details-planet/details-planet';
import { DetailsSpeciePage } from '../details-specie/details-specie';
import { DetailsStarshipPage } from '../details-starship/details-starship';
import { DetailsVehiclePage } from '../details-vehicle/details-vehicle';
import { DetailsFilmPage } from '../details-film/details-film';
/* end */

@IonicPage()
@Component({
  selector: 'page-details-character',
  templateUrl: 'details-character.html',
})
export class DetailsCharacterPage {

  character;
  idCharacter;

  listFilmsName = [];
  listPlanetsName = [];
  listStarshipsName = [];
  listVehiclesName = [];
  listSpeciesName = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idCharacter = navParams.get('idCharacter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsCharacter');
    this.swapiProvider.getCharacter(this.idCharacter).subscribe(data => {
      this.character = data;

       function MonObjet(id, name){
          this.id = id
          this.name = name;
       }

      /*  GetFilmsNames  */
      for (var index = 0; index < this.character.films.length; index++) {
        const idFilm = this.character.films[index].slice('https://swapi.co/api/films/'.length, -1);
        this.swapiProvider.getElementName("films", idFilm).subscribe(data => {
          this.listFilmsName.push(new MonObjet(idFilm, data['title']));
        });
      }
      /* End */

      /*  GetStarshipsNames  */
      for (index = 0; index < this.character.starships.length; index++) {
        const idStarship = this.character.starships[index].slice('https://swapi.co/api/starships/'.length, -1);
        this.swapiProvider.getElementName("starships", idStarship).subscribe(data => {
          this.listStarshipsName.push(new MonObjet(idStarship, data['name']));
        });
      }
      /* End */

      /*  GetVehiclesNames  */
      for (index = 0; index < this.character.vehicles.length; index++) {
        const idVehicle = this.character.vehicles[index].slice('https://swapi.co/api/vehicles/'.length, -1);
        this.swapiProvider.getElementName("vehicles", idVehicle).subscribe(data => {
          this.listVehiclesName.push(new MonObjet(idVehicle, data['name']));
        });
      }
      /* End */

      /*  GetSpeciesNames  */
      for (index = 0; index < this.character.species.length; index++) {
        const idSpecies = this.character.species[index].slice('https://swapi.co/api/species/'.length, -1);
        this.swapiProvider.getElementName("species", idSpecies).subscribe(data => {
          this.listSpeciesName.push(new MonObjet(idSpecies, data['name']));
        });
      }
      /* End */


    });

    

  } // fin view load

  filmSelected(film) {
    this.navCtrl.push(DetailsFilmPage, { idFilm: film});
  }

  characterSelected(character) {
    this.navCtrl.push(DetailsCharacterPage, { idCharacter: character});
  }

  planetSelected(planet) {
    this.navCtrl.push(DetailsPlanetPage, { idPlanet: planet});
  }

  specieSelected(specie) {    
    this.navCtrl.push(DetailsSpeciePage, { idSpecie: specie});
  }

  starshipSelected(starship) {
    this.navCtrl.push(DetailsStarshipPage, { idStarship: starship});
  }

  vehicleSelected(vehicle) {
    this.navCtrl.push(DetailsVehiclePage, { idVehicle: vehicle});
  }


}
