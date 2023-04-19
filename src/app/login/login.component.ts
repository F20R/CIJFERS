import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import {ApiService} from "../servicios/api.service";
import {LoginI} from "../modelos/login.interface";
import {ResponseI} from "../modelos/response.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private api:ApiService, private router:Router) {}

  ngOnInit() {
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['contacto'])
    }
  }

  onLogin(form:LoginI){
    this.api.loginByUsername(form).subscribe(data=>{
      console.log(data);
      let dataResponse:ResponseI = data;
      if(dataResponse.token){
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['contacto']);
      }
    });

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


}
