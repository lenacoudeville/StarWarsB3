import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/* pages à importer */
import { DetailsFilmPage } from '../details-film/details-film';
import { DetailsCharacterPage } from '../details-character/details-character';
/* end */

@IonicPage()
@Component({
  selector: 'page-details-starship',
  templateUrl: 'details-starship.html',
})
export class DetailsStarshipPage {

  starship;
  idStarship;

  listFilmsName:any = [];
  listPeoplesName:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiProvider: SwapiProvider) {
    this.idStarship = navParams.get('idStarship');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsStarship');
    this.swapiProvider.getStarship(this.idStarship).subscribe(data => {
      this.starship = data;
      
      function MonObjet(id, name){
        this.id = id
        this.name = name;
     }
      
      /*  GetFilmsNames  */
      for (var index = 0; index < this.starship.films.length; index++) {
        const idFilm = this.starship.films[index].slice('https://swapi.co/api/films/'.length, -1);
        this.swapiProvider.getElementName("films", idFilm).subscribe(data => {
          this.listFilmsName.push(new MonObjet(idFilm, data['title']));
        });
      }
      /* End */
      
      /*  GetPilotsNames  */
      for (var index = 0; index < this.starship.pilots.length; index++) {
        const idPeople = this.starship.pilots[index].slice('https://swapi.co/api/people/'.length, -1);
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
