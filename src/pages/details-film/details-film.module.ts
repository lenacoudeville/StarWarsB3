import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsFilmPage } from './details-film';

@NgModule({
  declarations: [
    DetailsFilmPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsFilmPage),
  ],
})
export class DetailsFilmModule {}
