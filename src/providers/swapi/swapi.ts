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

  
  listFilmsNew() {
    this.storage.get(`films/`).then((dataCached) => {
      if (dataCached) {
        console.log("if");
        console.log('CACHE', JSON.parse(dataCached))
        return JSON.parse(dataCached);        
      } else {
        console.log("else")
        let request = `${this.endPoint}/films/`;        
        var data = this.http.get(request).map((res : any) => res.results);
        this.storage.set(`films/`, JSON.stringify(data))
        console.log("fin")
        return data;
      }
    })
  } 

  getFilm(idFilm){
              let request = `${this.endPoint}/films/${idFilm}/`;
        return this.http.get(request);
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
