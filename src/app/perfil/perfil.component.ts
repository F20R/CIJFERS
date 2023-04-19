import {Component, OnInit} from '@angular/core';
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  perfiles:any;

  nuevoForm = new FormGroup({
    nombre : new FormControl(''),
    apellidos : new FormControl(''),
    sexo : new FormControl(''),
    edad : new FormControl(''),
    usuario : new FormControl('fet')
  })

  constructor(private api : ApiService, private router:Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.api.getPerfilId().subscribe(resp => {
      this.perfiles = resp;
      localStorage.getItem('token')
      console.log(this.perfiles)
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

  postFormP(form :any){
    this.api.postPerfil(form).subscribe(data =>{
      console.log(data);
    })
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
