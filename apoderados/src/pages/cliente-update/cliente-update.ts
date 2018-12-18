import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../models/cliente';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-cliente-update',
  templateUrl: 'cliente-update.html',
})
export class ClienteUpdatePage {

  cliente: Cliente = new Cliente();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.cliente = this.navParams.get('cliente');
  }

  save(form: NgForm){
    this.rest.updateCliente(form, this.cliente.id).subscribe(
      result => {
        this.navParams.get("parentPage").getClientes(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}



