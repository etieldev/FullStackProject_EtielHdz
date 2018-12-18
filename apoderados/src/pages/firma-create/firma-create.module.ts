import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirmaCreatePage } from './firma-create';

@NgModule({
  declarations: [
    FirmaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(FirmaCreatePage),
  ],
})
export class FirmaCreatePageModule {}