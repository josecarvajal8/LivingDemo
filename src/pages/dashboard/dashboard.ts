import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MesaPage } from '../mesa/mesa';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  onMesa(numMesa){
    this.navCtrl.push(MesaPage,numMesa);
  }

}
