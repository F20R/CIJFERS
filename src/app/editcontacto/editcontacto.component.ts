import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../servicios/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-editcontacto',
  templateUrl: './editcontacto.component.html',
  styleUrls: ['./editcontacto.component.css']
})
export class EditcontactoComponent {

  nuevos:any;

  id!: string;
  nombreUsuario!: string;
  usuario!: string;

  nuevoForm = new FormGroup({
    id : new FormControl(''),
    nombre : new FormControl(''),
    nombre_usuario : new FormControl(''),
    usuario : new FormControl(this.usuario),
    telefono : new FormControl(''),
    bloqueado : new FormControl(''),
  })

  constructor(private api : ApiService, private router:Router, private http: HttpClient, public route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.nombreUsuario = this.route.snapshot.paramMap.get('nombreUsuario')?? '';
    this.id = this.route.snapshot.params['id'];
    this.usuario = this.route.snapshot.paramMap.get('nombre') ?? '';
    this.nuevoForm = new FormGroup({
      id : new FormControl(this.id),
      nombre : new FormControl(this.usuario),
      nombre_usuario : new FormControl(this.nombreUsuario),
      usuario : new FormControl(this.usuario),
      telefono : new FormControl(''),
      bloqueado : new FormControl('')
    });
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.api.getContactosId().subscribe(resp => {
      this.nuevos = resp;
      localStorage.getItem('token')
      console.log(this.nuevos)
    })
  }

  postForm(form :any){
    this.api.postContacto(form).subscribe(data =>{
      console.log(data);

    })
    this.router.navigate(['contacto']);
  }

  guardarContacto() {
    this.http.post('http://127.0.0.1:8000/api/contacto/editar/' + this.id, this.nuevoForm.value).subscribe(res => {
      console.log(res);
    })
    this.router.navigate(['contacto']);
  }


}
