import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  registros : any;

  crearForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    rol : new FormControl('USER')
  })

  constructor(private api : ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  obtenerDatos(){
    this.api.getAllContactos().subscribe(resp => {
      this.registros = resp;
      console.log(this.registros)
    })
  }


  postCrear(form :any){
    this.api.postCrearCuenta(form).subscribe(data =>{
      console.log(data);
    })
  }

  RedirectCrearPerfil(){
    this.router.navigate(['crearPerfil'])
  }

  RedirectCrearCuenta1(){
    this.router.navigate(['crearCuenta'])
  }

  RedirectContactos(){
    this.router.navigate(['contacto'])
  }

}
