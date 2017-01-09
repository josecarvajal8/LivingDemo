import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MesaPage } from '../pages/mesa/mesa';
import { EstadoPage } from '../pages/estado/estado';
import { PortalCPage } from '../pages/portal-c/portal-c';
import { OrdenPage } from '../pages/orden/orden';

import { Auth } from '../providers/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    MesaPage,
    EstadoPage,
    PortalCPage,
    OrdenPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    MesaPage,
    EstadoPage,
    PortalCPage,
    OrdenPage
  ],
  providers: [
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
