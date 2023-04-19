import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseI} from "../modelos/response.interface";
import {LoginI} from "../modelos/login.interface";
import {listaContactoI} from "../modelos/listaContacto.interface";
import {ContactoI} from "../modelos/contacto.interface";
import {ChatI} from "../modelos/chat.interface";
import {CrearCuentaI} from "../modelos/crearCuenta.interface";
import {listaPerfilI} from "../modelos/listaPerfil.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/";


  headers = new Headers();
  constructor(private http:HttpClient) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer" + localStorage.getItem('token'));
  }



  loginByUsername(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + 'api/login/auth';
    return this.http.post<ResponseI>(direccion , form);
  }

  getAllContactos():Observable<listaContactoI[]>{
    let direccion = this.url + 'api/contacto/list';
    return this.http.get<listaContactoI[]>(direccion)
  }


  getContactosId():Observable<listaContactoI[]>{
    let direccion = this.url + 'api/usuario/list/id'+ {headers : this.headers};
    return this.http.get<listaContactoI[]>(direccion);
  }

  getPerfilId():Observable<listaPerfilI[]>{
    let direccion = this.url + 'api/perfil/list/id'+ {headers : this.headers};
    return this.http.get<listaPerfilI[]>(direccion);
  }

  eliminarContacto(from : ContactoI):Observable<ResponseI>{
    let direccion = this.url + 'api/contacto/delete';
    let Options = {
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      }),
      body:from
    }
    return this.http.delete<ResponseI>(direccion,Options);
  }

  postContacto(form : ContactoI) : Observable<ResponseI>{
    let direccion = this.url + 'api/contacto/save';
    return this.http.post<ResponseI>(direccion,form);
  }

  getChat():Observable<ChatI[]>{
    let direccion = this.url + 'api/chat/list/id2';
    return this.http.get<ChatI[]>(direccion)
  }

  getChatR():Observable<ChatR[]>{
    let direccion = this.url + 'api/chat/list/id';
    return this.http.get<ChatR[]>(direccion)
  }


  postCrearCuenta(form : CrearCuentaI) : Observable<ResponseI>{
    let direccion = this.url + 'api/usuario/save';
    return this.http.post<ResponseI>(direccion,form);
  }

  postChat1(form : ChatI) : Observable<ResponseI>{
    let direccion = this.url + 'api/chat/save';
    return this.http.post<ResponseI>(direccion,form);
  }

}

export interface ChatR{
  mensaje?: any;
  emisor?: any;
  receptor? : any;
  fecha?:any;
  token?: any;
}
