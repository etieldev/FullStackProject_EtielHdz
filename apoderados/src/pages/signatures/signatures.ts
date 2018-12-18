import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Firma } from '../../models/firma';
import { FirmaCreatePage } from '../../pages/firma-create/firma-create';
import { FirmaUpdatePage } from '../../pages/firma-update/firma-update';
import { ContactPage } from '../contact/contact';
import { CrudlocalPage } from '../crudlocal/crudlocal';


@Component({
  selector: 'page-signatures',
  templateUrl: 'signatures.html'
})
export class SignaturesPage {

  private firmas: Array<Firma>;
  private errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider, public loadingCtrl: LoadingController) { }

  ionViewDidLoad(){
    this.getFirmas();
    this.presentLoadingDefault();
  }

  getFirmas(): any {
    this.rest.getFirmas().subscribe(
      firmas => this.firmas = firmas,
      error => this.errorMessage = error
    );
  }

  showFirmaById(Id_Firma: number){
    this.getFirmaById(Id_Firma);
  }

  getFirmaById(Id_Firma: number): any {
    this.rest.getFirmaById(Id_Firma).subscribe(
      (firma: Firma) => console.log(JSON.stringify(firma)),
      error => this.errorMessage = error
    );
  }

  createFirma(){
    this.navCtrl.push(FirmaCreatePage, { "parentPage": this });
  }

  updateFirma(firma: Firma){
    this.navCtrl.push(FirmaUpdatePage, { firma: firma, "parentPage": this });
  }

  deleteFirmaById(id_Firma: number){
    this.rest.deleteFirmaById(id_Firma).subscribe(
      data => this.firmas.splice(
                this.firmas.map(item => item.id).indexOf(id_Firma), 1),
      error => this.errorMessage = error
    );
  }

  goToAdminPage(){
    this.navCtrl.push(ContactPage);
  }

  presentLoadingDefault(){
    let loading = this.loadingCtrl.create({
    content: 'Loading Data...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    document.getElementById("galleryHiden").style.visibility = "visible";
  }, 1800);
}

goToCrudLocal(){
  this.navCtrl.push(CrudlocalPage);
}

}


