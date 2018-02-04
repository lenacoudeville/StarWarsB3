import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/* pages à importer */
import { DetailsPlanetPage } from '../details-planet/details-planet';
import { DetailsSpeciePage } from '../details-specie/details-specie';
import { DetailsStarshipPage } from '../details-starship/details-starship';
import { DetailsVehiclePage } from '../details-vehicle/details-vehicle';
import { DetailsCharacterPage } from '../details-character/details-character';
/* end */

@IonicPage()
@Component({
  selector: 'page-details-film',
  templateUrl: 'details-film.html',
})
export class DetailsFilmPage {

  film;
  idFilm;
  
  listPeoplesName:any = [];
  listPlanetsName:any = [];
  listStarshipsName:any = [];
  listVehiclesName:any = [];
  listSpeciesName:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idFilm = navParams.get('idFilm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsFilm');
    this.swapiProvider.getFilm(this.idFilm).subscribe(data => {
      this.film = data;

      function MonObjet(id, name){
        this.id = id
        this.name = name;
     }
      
      /*  GetCharacterNames  */
      for (var index = 0; index < this.film.characters.length; index++) {
        const idPeople = this.film.characters[index].slice('https://swapi.co/api/people/'.length, -1);
        this.swapiProvider.getElementName("people", idPeople).subscribe(data => {         
          this.listPeoplesName.push(new MonObjet(idPeople, data['name']));
        });
      }
      /* End */

      /*  GetPlanetsNames  */
      for (index = 0; index < this.film.planets.length; index++) {
        const idPlanet = this.film.planets[index].slice('https://swapi.co/api/planets/'.length, -1);
        this.swapiProvider.getElementName("planets", idPlanet).subscribe(data => {
          this.listPlanetsName.push(new MonObjet(idPlanet, data['name']));
        });
      }
      /* End */

      /*  GetStarshipsNames  */
      for (index = 0; index < this.film.starships.length; index++) {
        const idStarship = this.film.starships[index].slice('https://swapi.co/api/starships/'.length, -1);
        this.swapiProvider.getElementName("starships", idStarship).subscribe(data => {
          this.listStarshipsName.push(new MonObjet(idStarship, data['name']));
        });
      }
      /* End */

      /*  GetVehiclesNames  */
      for (index = 0; index < this.film.vehicles.length; index++) {
        const idVehicle = this.film.vehicles[index].slice('https://swapi.co/api/vehicles/'.length, -1);
        this.swapiProvider.getElementName("vehicles", idVehicle).subscribe(data => {
          this.listVehiclesName.push(new MonObjet(idVehicle, data['name']));
        });
      }
      /* End */

      /*  GetSpeciesNames  */
      for (index = 0; index < this.film.species.length; index++) {
        const idSpecies = this.film.species[index].slice('https://swapi.co/api/species/'.length, -1);
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
