import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { Createaccount2Page } from '../pages/createaccount2/createaccount2';
import { Createaccount3Page } from '../pages/createaccount3/createaccount3';
import { SignaturesPage } from '../pages/signatures/signatures';
import { FirmaCreatePage } from '../pages/firma-create/firma-create';
import { FirmaUpdatePage } from '../pages/firma-update/firma-update';
import { ClienteCreatePage } from '../pages/cliente-create/cliente-create';
import { ClienteUpdatePage } from '../pages/cliente-update/cliente-update';

import { CrudlocalPage } from '../pages/crudlocal/crudlocal';

import { HttpClientModule } from '@angular/common/http';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GalleryPage } from '../pages/gallery/gallery';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { SQLite } from '@ionic-native/sqlite';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateaccountPage,
    Createaccount2Page,
    Createaccount3Page,
    SignaturesPage,
    FirmaCreatePage,
    FirmaUpdatePage,
    ClienteCreatePage,
    GalleryPage,
    ClienteUpdatePage,
    CrudlocalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateaccountPage,
    Createaccount2Page,
    Createaccount3Page,
    SignaturesPage,
    FirmaCreatePage,
    FirmaUpdatePage,
    ClienteCreatePage,
    GalleryPage,
    ClienteUpdatePage,
    CrudlocalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    TasksServiceProvider
  ]
})
export class AppModule {}
