import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/* pages à importer */
import { DetailsFilmPage } from '../details-film/details-film';
import { DetailsCharacterPage } from '../details-character/details-character';
import { DetailsPlanetPage } from '../details-planet/details-planet';
/* end */

@IonicPage()
@Component({
  selector: 'page-details-specie',
  templateUrl: 'details-specie.html',
})
export class DetailsSpeciePage {

  specie;
  idSpecie;

  listFilmsName:any = [];
  listPeoplesName:any = [];  
  listPlanetsName:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idSpecie = navParams.get('idSpecie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsSpecie');
    this.swapiProvider.getSpecie(this.idSpecie).subscribe(data => {
      this.specie = data;

      var monObjet: any = {};
      
      /*  GetFilmsNames  */
      for (var index = 0; index < this.specie.films.length; index++) {
        const idFilm = this.specie.films[index].slice('https://swapi.co/api/films/'.length, -1);
        this.swapiProvider.getElementName("films", idFilm).subscribe(data => {
          monObjet.id = idFilm;
          monObjet.name = data['name']
          this.listFilmsName[index] = monObjet;
          console.log(this.listFilmsName[index].id,  this.listFilmsName[index].name)
        });
      }
      /* End */
      
      /*  GetCharacterNames  */
      for (var index = 0; index < this.specie.people.length; index++) {
        const idPeople = this.specie.people[index].slice('https://swapi.co/api/people/'.length, -1);
        this.swapiProvider.getElementName("people", idPeople).subscribe(data => {
          monObjet.id = idPeople;
          monObjet.name = data['name']
          this.listPeoplesName[index] = monObjet;
          console.log(this.listPeoplesName[index].id,  this.listPeoplesName[index].name)
        });
      }
      /* End */

            /*  GetPlanetsNames  */
            for (var index = 0; index < this.specie.homeworld.length; index++) {
              const idPlanet = this.specie.homeworld[index].slice('https://swapi.co/api/planets/'.length, -1);
              this.swapiProvider.getElementName("planets", idPlanet).subscribe(data => {
                monObjet.id = idPlanet;
                monObjet.name = data['name']
                this.listPlanetsName[index] = monObjet;
                console.log(this.listPlanetsName[index].id,  this.listPlanetsName[index].name)
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

}
