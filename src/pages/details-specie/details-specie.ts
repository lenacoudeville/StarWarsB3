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

      function MonObjet(id, name){
        this.id = id
        this.name = name;
     }
      
      /*  GetFilmsNames  */
      for (var index = 0; index < this.specie.films.length; index++) {
        const idFilm = this.specie.films[index].slice('https://swapi.co/api/films/'.length, -1);
        this.swapiProvider.getElementName("films", idFilm).subscribe(data => {
          this.listFilmsName.push(new MonObjet(idFilm, data['title']));
        });
      }
      /* End */
      
      /*  GetCharacterNames  */
      for (var index = 0; index < this.specie.people.length; index++) {
        const idPeople = this.specie.people[index].slice('https://swapi.co/api/people/'.length, -1);
        this.swapiProvider.getElementName("people", idPeople).subscribe(data => {
          this.listPeoplesName.push(new MonObjet(idPeople, data['name']));
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
