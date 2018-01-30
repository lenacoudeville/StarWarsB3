import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/* pages à importer */
import { DetailsFilmPage } from '../details-film/details-film';
import { DetailsCharacterPage } from '../details-character/details-character';
/* end */

@IonicPage()
@Component({
  selector: 'page-details-planet',
  templateUrl: 'details-planet.html',
})
export class DetailsPlanetPage {

  planet;
  idPlanet;

  listFilmsName:any = [];
  listPeoplesName:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idPlanet = navParams.get('idPlanet');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPlanet');
    this.swapiProvider.getPlanet(this.idPlanet).subscribe(data => {
      this.planet = data;

      var monObjet: any = {};
      
      /*  GetFilmsNames  */
      for (var index = 0; index < this.planet.films.length; index++) {
        const idFilm = this.planet.films[index].slice('https://swapi.co/api/films/'.length, -1);
        this.swapiProvider.getElementName("films", idFilm).subscribe(data => {
          monObjet.id = idFilm;
          monObjet.name = data['name']
          this.listFilmsName[index] = monObjet;
          console.log(this.listFilmsName[index].id,  this.listFilmsName[index].name)
        });
      }
      /* End */
      
      /*  GetResidentNames  */
      for (var index = 0; index < this.planet.residents.length; index++) {
        const idPeople = this.planet.residents[index].slice('https://swapi.co/api/people/'.length, -1);
        this.swapiProvider.getElementName("people", idPeople).subscribe(data => {
          monObjet.id = idPeople;
          monObjet.name = data['name']
          this.listPeoplesName[index] = monObjet;
          console.log(this.listPeoplesName[index].id,  this.listPeoplesName[index].name)
        });
      }

    });
    
  } // fin view load

  filmSelected(film) {
    this.navCtrl.push(DetailsFilmPage, { idFilm: film});
  }

  characterSelected(character) {
    this.navCtrl.push(DetailsCharacterPage, { idCharacter: character});
  }


}
