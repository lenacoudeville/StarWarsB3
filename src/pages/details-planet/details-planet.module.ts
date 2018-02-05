import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPlanetPage } from './details-planet';

@NgModule({
  declarations: [
    DetailsPlanetPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPlanetPage),
  ],
})
export class DetailsPlanetModule {}
