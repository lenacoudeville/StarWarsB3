import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsVehiclePage } from './details-vehicle';

@NgModule({
  declarations: [
    DetailsVehiclePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsVehiclePage),
  ],
})
export class DetailsVehicleModule {}
