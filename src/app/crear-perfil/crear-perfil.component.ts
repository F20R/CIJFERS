import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../servicios/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit{

  nuevosPerfiles:any;

  nuevoPerfilForm = new FormGroup({
    nombre : new FormControl(''),
    apellidos : new FormControl(''),
    telefono : new FormControl(''),
    sexo : new FormControl(''),
    edad : new FormControl(''),
    usuario : new FormControl('')
  })

  transformarValor(valor: number): string {
    if (valor === 1) {
      return 'Masculino';
    } else if (valor === 0) {
      return 'Femenino';
    } else {
      return 'Otro';
    }
  }

  constructor(private api : ApiService, private router:Router, private http: HttpClient,public route:ActivatedRoute) {
  }

  ngOnInit(): void {

  }


  obtenerDatos(){
    this.api.getPerfilId().subscribe(resp => {
      this.nuevosPerfiles = resp;
      localStorage.getItem('token')
      console.log(this.nuevosPerfiles)
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
