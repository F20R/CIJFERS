import {Component, OnInit} from '@angular/core';
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactoI} from "../modelos/contacto.interface";

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

  transformarValor(bloqueado: number): string {
    if (bloqueado === 1) {
      return 'Masculino';
    } else {
      return 'Femenino';
    }
  }

  obtenerDatos(){
    this.api.getContactosId().subscribe(resp => {
      this.contactos = resp;
      localStorage.getItem('token')
      console.log(this.contactos)
    })
  }


  Redirect(){
    //PARAMETRO
    this.router.navigate(['chat']) //^PAREMTRO )
  }

  eliminarUser={
    'id':'31'
  }

  eliminar(contacto: any){
    const body = JSON.stringify({
      'id': contacto.id
    })
    this.http.delete('http://127.0.0.1:8000/api/contacto/delete', {body} ).subscribe(() => {
      setTimeout(() => {
        location.reload();
      }, 1000);
    })

  }


  toggleBlocked(contacto:any) {
    contacto.bloqueado = !contacto.bloqueado;
    // Aquí debe enviar una solicitud a su base de datos para actualizar el valor de la propiedad Bloqueado.
  }


  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}
