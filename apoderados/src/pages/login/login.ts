import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateaccountPage } from '../createaccount/createaccount';
import { SignaturesPage } from '../signatures/signatures';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  goToSignUp() {
    this.navCtrl.push(CreateaccountPage);
  }

  goToList(){
    this.navCtrl.push(SignaturesPage);
  }
}
