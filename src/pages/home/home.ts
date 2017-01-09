import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

import { PortalCPage } from '../portal-c/portal-c';

import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user;
  pass;
  constructor(public navCtrl: NavController, private http: Http) {

  }

  onLogin(user, pass) {

    this.http.get('https://contenido-dispositivo-ecoparque-luismigon.c9users.io/log/' + user + '/' + pass).subscribe(data => {
      data.json().success ? this.navCtrl.setRoot(DashboardPage) : this.http.get('https://contenido-dispositivo-ecoparque-luismigon.c9users.io/logcaja/' + user + '/' + pass).subscribe(data => {
        data.json().success ? this.navCtrl.setRoot(PortalCPage) : console.log("Credenciales incorrectas");
      });
    });

  }

}
