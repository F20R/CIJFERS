import {Component, OnInit} from '@angular/core';
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{

  imagenes:any;

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
    this.api.getImagenesId().subscribe(resp => {
      this.imagenes = resp;
      localStorage.getItem('token')
      console.log(this.imagenes)
    })
  }


  Redirect(){
    //PARAMETRO
    this.router.navigate(['nuevaImagen'] )
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

  apiUrl = 'http://127.0.0.1:8000';

  toggleBlocked(contacto: any) {
    contacto.bloqueado = !contacto.bloqueado;

    const url = `${this.apiUrl}/api/contacto/editar/${contacto.id}`;
    const body = JSON.stringify(contacto);

    this.http.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(
      (response) => {
        console.log('Contacto editado correctamente');
      },
      (error) => {
        console.log('Error al editar el contacto');
      }
    );
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
