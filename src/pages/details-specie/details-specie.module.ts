import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsSpeciePage } from './details-specie';

@NgModule({
  declarations: [
    DetailsSpeciePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsSpeciePage),
  ],
})
export class DetailsSpecieModule {}
