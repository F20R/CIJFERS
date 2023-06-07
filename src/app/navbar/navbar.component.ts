import {Component, OnInit} from '@angular/core';
import {LoginI} from "../modelos/login.interface";
import {ResponseI} from "../modelos/response.interface";
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private api:ApiService, private router:Router, private auth:AuthService) {
  }

  token: any;

  ngOnInit() {
    this.token = this.auth.getToken();
  }

  isAuth(){
    return this.auth.isLoggedIn();
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
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

}
