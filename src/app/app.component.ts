import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { AboutPage } from "../pages/about/about";
import { CartDetailPage } from "../pages/cart-detail/cart-detail";
import { ContactPage } from "../pages/contact/contact";
import { DetailPage } from "../pages/detail/detail";
import {  DetailmodalPage } from "../pages/detailmodal/detailmodal";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { MenuPage } from "../pages/menu/menu";
import { PaymentPage } from "../pages/payment/payment";
import { RegisterPage } from "../pages/register/register";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AboutPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
