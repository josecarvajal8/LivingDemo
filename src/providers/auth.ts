import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

var url = 'https://livingserver.herokuapp.com/';
var headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
var options = new RequestOptions({ headers: headers });

@Injectable()
export class Auth {

  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }

  signIn(usuario,contrasena){
    return new Promise<any>((resolve,reject)=>{
      this.http.post(url+'signIn',{usuario:usuario,contrasena:contrasena}, options).subscribe(res=>{
        if(res.json().codigo) {
          resolve(res.json());
        }else{
          reject(res.json().message);
        }
      },error=>reject(error));
    });
  }

}
