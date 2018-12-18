import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteCreatePage } from './cliente-create';

@NgModule({
  declarations: [
    ClienteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteCreatePage),
  ],
})
export class ClienteCreatePageModule {}