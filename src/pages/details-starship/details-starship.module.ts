import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsStarshipPage } from './details-starship';

@NgModule({
  declarations: [
    DetailsStarshipPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsStarshipPage),
  ],
})
export class DetailsStarshipModule {}
