import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Cliente } from '../../models/cliente';
import { ClienteCreatePage } from '../../pages/cliente-create/cliente-create';
import { ClienteUpdatePage } from '../../pages/cliente-update/cliente-update';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private clientes: Array<Cliente>;
  private errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {}

  ionViewDidLoad(){
    this.getClientes();
  }

  getClientes(): any {
    this.rest.getClientes().subscribe(
      clientes => this.clientes = clientes,
      error => this.errorMessage = error
    );
  }

  showClienteById(Id_Cliente: number){
    this.getClienteById(Id_Cliente);
  }

  getClienteById(Id_Cliente: number): any {
    this.rest.getClienteById(Id_Cliente).subscribe(
      (cliente: Cliente) => console.log(JSON.stringify(cliente)),
      error => this.errorMessage = error
    );
  }

  createCliente(){
    this.navCtrl.push(ClienteCreatePage, { "parentPage": this });
  }
º
  updateCliente(cliente: Cliente){
    this.navCtrl.push(ClienteUpdatePage, { cliente: cliente, "parentPage": this });
  }

  deleteClienteById(Id_Cliente: number){
    this.rest.deleteClienteById(Id_Cliente).subscribe(
      data => this.clientes.splice(
                this.clientes.map(item => item.id).indexOf(Id_Cliente), 1),
      error => this.errorMessage = error
    );
  }
}
