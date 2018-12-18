import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = ContactPage;
  tab4Root = GalleryPage;

  constructor() {

  }
}
