import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firma } from '../../models/firma';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-firma-update',
  templateUrl: 'firma-update.html',
})
export class FirmaUpdatePage {

  firma: Firma = new Firma();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.firma = this.navParams.get('firma');
  }

  save(form: NgForm){
    this.rest.updateFirma(form, this.firma.id_Firma).subscribe(
      result => {
        this.navParams.get("parentPage").getFirmas(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}



