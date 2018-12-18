import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-crudlocal',
  templateUrl: 'crudlocal.html'
})
export class CrudlocalPage {

  firma: any[] = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public tasksServiceProvider: TasksServiceProvider
  ) {}

  getAllFirmas(){
    this.tasksServiceProvider.getAll()
    .then(firma => {
      this.firma = firma;
    })
    .catch( error => {
      console.error( error );
    });
  }

  openAlertNewFirma(){
    let alert = this.alertCtrl.create({
      title: 'Crear firma',
      message: 'Rellene todos los datos de la firma',
      inputs: [
        {
          name: 'numEscritura',
          placeholder: 'Número de escritura: ',
        },{
          name: 'fecha',
          placeholder: 'Fecha de hoy: ',
        },
        {
          name: 'precioVivienda',
          placeholder: 'Precio de la vivienda: ',
        },
        {
          name: 'numCaras',
          placeholder: 'Número de caras.',
        },
        {
          name: 'garaje',
          placeholder: 'Garaje: ',
        },
        {
          name: 'trastero',
          placeholder: 'Trastero: ',
        },
        {
          name: 'numPersona',
          placeholder: 'Número de persona: ',
        },
        {
          name: 'idOficinas',
          placeholder: 'Id de oficina: ',
        },          
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{ 
            data.completed = false;
            this.tasksServiceProvider.create(data)
            .then(response => {
              this.firma.unshift( data );
            })
            .catch( error => {
              console.error( error );
            })
          }
        }
      ]
    });
    alert.present();
  }

  updateFirma(firma, index){
    firma = Object.assign({}, firma);
    firma.completed = !firma.completed;
    this.tasksServiceProvider.update(firma)
    .then( response => {
      this.firma[index] = firma;
    })
    .catch( error => {
      console.error( error );
    })
  }

}




