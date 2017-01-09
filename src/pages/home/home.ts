import { Component } from '@angular/core';

import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

import { PortalCPage } from '../portal-c/portal-c';

import { Http } from '@angular/http';

import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading:any;

  constructor(public navCtrl: NavController, private http: Http, public auth:Auth, 
    public alertCtrl:AlertController, public loadingCtrl:LoadingController) {

  }

  onLogin(user, pass) {

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: 'Cargando...'
    })
    this.loading.present();
    this.auth.signIn(user,pass).then(res=>{
      switch(res.tipo){
        case 1:
        this.navCtrl.setRoot(DashboardPage);
        break;
        case 2:
        this.navCtrl.setRoot(PortalCPage);
        break;
        default:
        this.navCtrl.setRoot(DashboardPage);
        break;
      }
    }).catch(error=>{
      this.loading.dismiss().then(()=>{
        let alert = this.alertCtrl.create({
          subTitle: error,
          buttons: [
            {
              text:'Ok',
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
  }

}
