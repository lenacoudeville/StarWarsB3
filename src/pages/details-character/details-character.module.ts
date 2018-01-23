import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsCharacterPage } from './details-character';

@NgModule({
  declarations: [
    DetailsCharacterPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsCharacterPage),
  ],
})
export class DetailsCharacterModule {}
