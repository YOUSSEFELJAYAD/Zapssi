import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AboutPage} from '../pages/about/about'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CartDetailPage } from "../pages/cart-detail/cart-detail";
import { ContactPage } from "../pages/contact/contact";
import { DetailPage } from "../pages/detail/detail";
import {  DetailmodalPage } from "../pages/detailmodal/detailmodal";
import { LoginPage } from "../pages/login/login";
import { MenuPage } from "../pages/menu/menu";
import { PaymentPage } from "../pages/payment/payment";
import { RegisterPage } from "../pages/register/register";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,AboutPage,CartDetailPage,ContactPage,DetailPage,DetailmodalPage,MenuPage,PaymentPage,RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,AboutPage,CartDetailPage,ContactPage,DetailPage,DetailmodalPage,MenuPage,PaymentPage,RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
