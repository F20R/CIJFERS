import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseI} from "../modelos/response.interface";
import {LoginI} from "../modelos/login.interface";
import {listaContactoI} from "../modelos/listaContacto.interface";
import {ContactoI} from "../modelos/contacto.interface";
import {ChatI} from "../modelos/chat.interface";
import {PerfilI} from "../modelos/perfil.interface";
import {CrearCuentaI} from "../modelos/crearCuenta.interface";
import {listaPerfilI} from "../modelos/listaPerfil.interface";
import {CrearContactoI} from "../modelos/crearContacto.interface";
import {listaChatI} from "../modelos/listaChat.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/";



  headers = new Headers();
  constructor(private http:HttpClient) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", 'token');
  }


  loginByUsername(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + 'api/login/aut';
    return this.http.post<ResponseI>(direccion , form);
  }


  postContacto(form : CrearContactoI) : Observable<ResponseI>{
    let direccion = this.url + 'api/contacto/guardar';
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllContactos():Observable<listaContactoI[]>{
    let direccion = this.url + 'api/contacto/list';
    return this.http.get<listaContactoI[]>(direccion)
  }


  getContactosId():Observable<listaContactoI[]>{
    let direccion = this.url + 'api/contacto/list/id';
    let token = localStorage.getItem('token')!;
    const httpHeaders = new HttpHeaders({
      'token': token
    })
    return this.http.get<listaContactoI[]>(direccion, {headers: httpHeaders});
  }

  getContactoID(){
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<listaContactoI[]>(`http://127.0.0.1:8000/api/galeria/list/id`, { headers: reqHeader });
  }

  getPerfilId():Observable<listaPerfilI[]>{
    let direccion = this.url + 'api/perfil/list/id';
    let token = localStorage.getItem('token')!;
    const httpHeaders = new HttpHeaders({
      'token': token
    })
    return this.http.get<listaPerfilI[]>(direccion, {headers: httpHeaders});
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




  postPerfil(form : PerfilI) : Observable<ResponseI>{
    let direccion = this.url + 'api/perfil/save';
    return this.http.post<ResponseI>(direccion,form);
  }

  getChatR():Observable<listaChatI[]>{
    let direccion = this.url + 'api/chat/list/id/listar';
    let token = localStorage.getItem('token')!;
    const httpHeaders = new HttpHeaders({
      'token': token
    })
    return this.http.get<listaChatI[]>(direccion, {headers: httpHeaders})
  }


  postCrearCuenta(form : CrearCuentaI) : Observable<ResponseI>{
    let direccion = this.url + 'api/usuario/save';
    return this.http.post<ResponseI>(direccion,form);
  }

  postChat1(form : ChatI) : Observable<ResponseI>{
    let direccion = this.url + 'api/chat/guarda';
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
