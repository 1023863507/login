import { Authentication } from './../../services/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email :string;
  password :string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private auth :Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createAccount(){
     this.auth.createUserWhithEmailAndPassword(this.email, this.password);
  }

  createAccountWithGoogle(){
    this.auth.createUserWhithGoogle();
  }

  createAccountWithFacebook(){
    this.auth.createUserWhithFacebook();
  }
}
