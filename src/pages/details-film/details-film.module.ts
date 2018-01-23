import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsFilm } from './details-film';

@NgModule({
  declarations: [
    DetailsFilm,
  ],
  imports: [
    IonicPageModule.forChild(DetailsFilm),
  ],
})
export class DetailsfilmModule {}