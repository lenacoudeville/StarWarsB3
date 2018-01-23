import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

 endPoint='https://swapi.co/api';

  constructor(public http: HttpClient) {
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

  listCharacters() {
    let request = `${this.endPoint}/people/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getCharacter(character){
    let request = `${this.endPoint}/people/${character}`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  listPlanets() {
    let request = `${this.endPoint}/planets/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getPlanet(planet){
    let request = `${this.endPoint}/planet/${planet}`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  listSpecies() {
    let request = `${this.endPoint}/species/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getSpecie(specie){
    let request = `${this.endPoint}/specie/${specie}`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  listStarships() {
    let request = `${this.endPoint}/starships/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getStarship(starship){
    let request = `${this.endPoint}/starships/${starship}`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  listVehicles() {
    let request = `${this.endPoint}/vehicles/`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

  getVehicle(vehicle){
    let request = `${this.endPoint}/vehicles/${vehicle}`;
    return this.http.get(request)
      .map((res : any) => res.results);
  }

}
