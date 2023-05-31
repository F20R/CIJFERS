import {Component, OnInit} from '@angular/core';
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {CrearContactoI} from "../modelos/crearContacto.interface";

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit{

  nuevos:any;

  nuevoForm = new FormGroup({
    nombre : new FormControl(''),
    nombre_usuario : new FormControl(''),
    usuario : new FormControl(''),
    telefono : new FormControl(''),
    bloqueado : new FormControl('1'),
  })

  constructor(private api : ApiService, private router:Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.api.getPerfilId().subscribe(resp => {
      this.nuevos = resp;
      localStorage.getItem('token')
      console.log(this.nuevos)
    })
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

  postForm(form :any){
    this.api.postContacto(form).subscribe(data =>{
      console.log(data);

    })
    this.router.navigate(['contacto']);
  }




  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}

