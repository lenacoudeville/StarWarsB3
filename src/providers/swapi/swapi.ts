import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

 endPoint='https://swapi.co/api';

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello SwapiProvider Provider');
  }

  listFilms() {
    let request = `${this.endPoint}/films/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getFilm(idFilm){
    let request = `${this.endPoint}/films/${idFilm}/`;
    return this.http.get(request);
  }

  getFilmNew(idFilm){
    this.storage.get(`films/${idFilm}`).then((dataCached) => {
      if (dataCached) {
        console.log('CACHE', JSON.parse(dataCached));
        return JSON.parse(dataCached);
      } else {
        let request = `${this.endPoint}/films/${idFilm}/`;
        this.http.get(request).subscribe(data => {
          console.log('API', data);
          this.storage.set(`films/${idFilm}`, JSON.stringify(data));
          return data;
        });
       
      }
    });
        
  }
    

  listCharacters() {
    let request = `${this.endPoint}/people/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getCharacter(character){
    let request = `${this.endPoint}/people/${character}/`;
    return this.http.get(request);
  }

  listPlanets() {
    let request = `${this.endPoint}/planets/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getPlanet(planet){
    let request = `${this.endPoint}/planets/${planet}/`;
    return this.http.get(request);
  }

  listSpecies() {
    let request = `${this.endPoint}/species/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getSpecie(specie){
    let request = `${this.endPoint}/species/${specie}/`;
    return this.http.get(request);
  }

  listStarships() {
    let request = `${this.endPoint}/starships/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getStarship(starship){
    let request = `${this.endPoint}/starships/${starship}/`;
    return this.http.get(request);
  }

  listVehicles() {
    let request = `${this.endPoint}/vehicles/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getVehicle(vehicle){
    let request = `${this.endPoint}/vehicles/${vehicle}/`;
    return this.http.get(request);
  }

  getElementName(type, idElement){
    let request = `${this.endPoint}/${type}/${idElement}/`;
    return this.http.get(request);
  }

  

}
