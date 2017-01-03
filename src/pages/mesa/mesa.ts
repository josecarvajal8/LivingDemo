import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-mesa',
  templateUrl: 'mesa.html'
})
export class MesaPage {

  numMesa:number;
  orden:Array<any>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl:AlertController, public toastCtrl:ToastController) {
    this.numMesa = this.navParams.data;
  }

  add(idProducto,nombreProducto){
    let toast = this.toastCtrl.create({
      message: 'Agregaste '+nombreProducto+' a la orden',
      duration: 2000,
      position: 'top'
    });
    idProducto==1?this.orden.push({nombre:'Aguardiente Blanco del Valle',codigo:1}):
    this.orden.push({nombre:'Ron Viejo de Caldas',codigo:2});
    toast.present();
  }

  confirm(){
    let alert = this.alertCtrl.create({
      title:'Resumen de orden'
    });
    this.orden.forEach(producto=>{
      alert.addInput({
        type: 'checkbox',
        label: producto.nombre,
        value: producto.codigo,
        checked: true
      });
    });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Envíar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.orden = [];
      }
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaPage');
  }

}
