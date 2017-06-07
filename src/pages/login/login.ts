import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      this.storage.set('token', 'teste');

      this.navCtrl.push(HomePage);
    }
  }

}
