import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteUpdatePage } from './cliente-update';

@NgModule({
  declarations: [
    ClienteUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteUpdatePage),
  ],
})
export class ClienteUpdatePageModule {}