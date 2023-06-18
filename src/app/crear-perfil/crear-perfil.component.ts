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

  opciones = [
    {value: '0', label: 'Masculino'},
    {value: '1', label: 'Femenino'}
  ];


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
  postFormP(form :any){
    this.api.postPerfil(form).subscribe(data =>{
      console.log(data);
    })
  }

}
