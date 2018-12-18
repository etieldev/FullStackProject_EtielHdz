import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Createaccount3Page} from '../createaccount3/createaccount3';

@Component({
  selector: 'page-createaccount2',
  templateUrl: 'createaccount2.html'
})
export class Createaccount2Page {

  constructor(public navCtrl: NavController) {

  }

  goToStep3(){
    this.navCtrl.push(Createaccount3Page);
  }
}


