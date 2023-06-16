import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../servicios/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nueva-imagen',
  templateUrl: './nueva-imagen.component.html',
  styleUrls: ['./nueva-imagen.component.css']
})
export class NuevaImagenComponent implements OnInit{


  nuevasImagenes:any;

  nuevaForm = new FormGroup({
    usuario : new FormControl(''),
    url : new FormControl(''),
    descripcion : new FormControl(''),
  })

  constructor(private api : ApiService, private router:Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.api.getPerfilId().subscribe(resp => {
      this.nuevasImagenes = resp;
      localStorage.getItem('token')
      console.log(this.nuevasImagenes)
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
    this.api.postNuevaImagen(form).subscribe(data =>{
      console.log(data);

    })
    this.router.navigate(['galeria']);
  }




  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}
