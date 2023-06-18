import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import {ApiService} from "../servicios/api.service";
import {LoginI} from "../modelos/login.interface";
import {ResponseI} from "../modelos/response.interface";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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

  constructor(private api:ApiService, private router:Router ,private toastr: ToastrService) {}

  ngOnInit() {
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['contacto'])
    }
  }

  onLogin(form: LoginI) {
    this.api.loginByUsername(form).subscribe(data => {
      console.log(data);
      let dataResponse: ResponseI = data;
      if (dataResponse.token) {
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['contacto']);
      } else {
        this.toastr.error('Contraseña Invalida', 'Error:');
      }
    });
  }


  RedirectCrearCuenta(){
    this.router.navigate(['crearCuenta'])
  }



}
