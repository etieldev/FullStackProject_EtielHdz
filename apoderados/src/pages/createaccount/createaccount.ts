import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Createaccount2Page} from '../createaccount2/createaccount2';

@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html'
})
export class CreateaccountPage {

  constructor(public navCtrl: NavController) {

  }

  goToStep2(){
    this.navCtrl.push(Createaccount2Page);
  }
}


