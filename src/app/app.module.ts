import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { WikiPageModule } from '../pages/wiki/wiki.module';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { DetailsFilmPage } from '../pages/details-film/details-film'
import { FilmsPage } from '../pages/films/films'
import { DetailsFilmModule } from '../pages/details-film/details-film.module'

import { DetailsCharacterPage } from '../pages/details-character/details-character'
import { CharactersPage } from '../pages/characters/characters'
import { DetailsCharacterModule } from '../pages/details-character/details-character.module'

import { DetailsPlanetPage } from '../pages/details-planet/details-planet'
import { PlanetsPage } from '../pages/planets/planets'
import { DetailsPlanetModule } from '../pages/details-planet/details-planet.module'

import { DetailsSpeciePage } from '../pages/details-specie/details-specie'
import { SpeciesPage } from '../pages/species/species'
import { DetailsSpecieModule } from '../pages/details-specie/details-specie.module'

import { DetailsStarshipPage } from '../pages/details-starship/details-starship'
import { StarshipsPage } from '../pages/starships/starships'
import { DetailsStarshipModule } from '../pages/details-starship/details-starship.module'

import { DetailsVehiclePage } from '../pages/details-vehicle/details-vehicle'
import { VehiclesPage } from '../pages/vehicles/vehicles'
import { DetailsVehicleModule } from '../pages/details-vehicle/details-vehicle.module'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SwapiProvider } from '../providers/swapi/swapi';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DetailsFilmPage,
    FilmsPage,
    DetailsCharacterPage,
    CharactersPage,
    PlanetsPage,
    DetailsPlanetPage,
    SpeciesPage,
    DetailsSpeciePage,
    StarshipsPage,
    DetailsStarshipPage,
    VehiclesPage,
    DetailsVehiclePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    WikiPageModule,
    IonicStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DetailsFilmPage,
    FilmsPage,
    DetailsCharacterPage,
    CharactersPage,
    PlanetsPage,
    DetailsPlanetPage,
    SpeciesPage,
    DetailsSpeciePage,
    StarshipsPage,
    DetailsStarshipPage,
    VehiclesPage,
    DetailsVehiclePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwapiProvider
  ]
})
export class AppModule {}
