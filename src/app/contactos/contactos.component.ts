import {Component, OnInit} from '@angular/core';
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit{

  contactos:any;

  constructor(private api : ApiService, private router:Router, private http: HttpClient) {
    const httpOptions = {
      headers:new HttpHeaders({
        'Authorization' : 'Bearer' + localStorage.getItem('token')
      })
    }
  }



  ngOnInit(): void {
    this.obtenerDatos();

  }

  obtenerDatos(){
    this.api.getContactosId().subscribe(resp => {
      this.contactos = resp;
      localStorage.getItem('token')
      console.log(this.contactos)
    })
  }


  Redirect(){
    this.router.navigate(['chat'])
  }

  eliminarUser={
    'id':'31'
  }
  eliminar(){

    const body = JSON.stringify({
      'id': this.eliminarUser.id
    })
    this.http.delete('http://127.0.0.1:8000/api/contacto/delete', {body} ).subscribe()

  }




  nuevoContacto(){
    this.router.navigate(['nuevo'])
  }

  RedirectCrearCuenta(){
    this.router.navigate(['login'])
  }

  RedirectCrearCuenta1(){
    this.router.navigate(['crearCuenta'])
  }

  RedirectContactos(){
    this.router.navigate(['contacto'])
  }


  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}
