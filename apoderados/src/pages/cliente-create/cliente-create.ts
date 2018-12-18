import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../../models/cliente';
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cliente-create',
  templateUrl: 'cliente-create.html',
})
export class ClienteCreatePage {

  cliente: Cliente = new Cliente();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public toastCtrl: ToastController) {
  }

  save(form: NgForm){
    this.rest.createCliente(form).subscribe(
      result => {
        this.navParams.get("parentPage").getClientes(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}

