import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) { }

  login() {
    // TODO: Functionality
    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();

    setTimeout(_ => {
      loader.dismiss();
      this.navCtrl.setRoot(TabsPage);
    }, 2000);
  }

}
