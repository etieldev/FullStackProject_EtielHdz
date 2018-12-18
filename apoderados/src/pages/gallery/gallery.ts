import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public rest: RestProvider, public loadingCtrl: LoadingController) {}

  //private images: Array<String> = new Array(4);

  ionViewDidLoad(){
    this.presentLoadingDefault();
  }


  presentLoadingDefault(){
    let loading = this.loadingCtrl.create({
    content: 'Loading Page...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    document.getElementById("galleryHiden").style.visibility = "visible";
  }, 1800);
}

  ver(image){
      console.log(image);
  }
}
