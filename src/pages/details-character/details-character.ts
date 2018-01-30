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

  listFilmsName:any = [];
  listPlanetsName:any = [];
  listStarshipsName:any = [];
  listVehiclesName:any = [];
  listSpeciesName:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idCharacter = navParams.get('idCharacter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsCharacter');
    this.swapiProvider.getCharacter(this.idCharacter).subscribe(data => {
      this.character = data;

      var monObjet: any = {};

      /*  GetFilmsNames  */
      for (var index = 0; index < this.character.films.length; index++) {
        const idFilm = this.character.films[index].slice('https://swapi.co/api/films/'.length, -1);
        this.swapiProvider.getElementName("films", idFilm).subscribe(data => {
          monObjet.id = idFilm;
          monObjet.name = data['name']
          this.listFilmsName[index] = monObjet;
          console.log(this.listFilmsName[index].id,  this.listFilmsName[index].name)
        });
      }
      /* End */

      /*  GetHomeWorldNames  */
      for (var index = 0; index < this.character.homeworld.length; index++) {
        const idPlanet = this.character.homeworld[index].slice('https://swapi.co/api/planets/'.length, -1);
        this.swapiProvider.getElementName("planets", idPlanet).subscribe(data => {
          monObjet.id = idPlanet;
          monObjet.name = data['name']
          this.listPlanetsName[index] = monObjet;
          console.log(this.listPlanetsName[index].id,  this.listPlanetsName[index].name)
        });
      }
      /* End */

      /*  GetStarshipsNames  */
      for (var index = 0; index < this.character.starships.length; index++) {
        const idStarship = this.character.starships[index].slice('https://swapi.co/api/starships/'.length, -1);
        this.swapiProvider.getElementName("starships", idStarship).subscribe(data => {
          monObjet.id = idStarship;
          monObjet.name = data['name']
          this.listStarshipsName[index] = monObjet;
          console.log(this.listStarshipsName[index].id,  this.listStarshipsName[index].name)
        });
      }
      /* End */

      /*  GetVehiclesNames  */
      for (var index = 0; index < this.character.vehicles.length; index++) {
        const idVehicle = this.character.vehicles[index].slice('https://swapi.co/api/vehicles/'.length, -1);
        this.swapiProvider.getElementName("vehicles", idVehicle).subscribe(data => {
          monObjet.id = idVehicle;
          monObjet.name = data['name']
          this.listVehiclesName[index] = monObjet;
          console.log(this.listVehiclesName[index].id,  this.listVehiclesName[index].name)
        });
      }
      /* End */

      /*  GetSpeciesNames  */
      for (var index = 0; index < this.character.species.length; index++) {
        const idSpecies = this.character.species[index].slice('https://swapi.co/api/species/'.length, -1);
        this.swapiProvider.getElementName("species", idSpecies).subscribe(data => {
          monObjet.id = idSpecies;
          monObjet.name = data['name']
          this.listSpeciesName[index] = monObjet;
          console.log(this.listSpeciesName[index].id,  this.listSpeciesName[index].name)
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
