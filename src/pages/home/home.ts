import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authentication } from '../../services/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  files :any;

  constructor(public navCtrl: NavController, private auth: Authentication) {
   
  }
  fileChange(ev){
    console.log(ev.target.files);
  }

   submit(){
     if(this.files.length<=0)return;
   }
}
