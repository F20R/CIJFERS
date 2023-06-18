import {Component, OnInit} from '@angular/core';
import {ApiService} from "../servicios/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  chats : any;
  id_receptor : any;
  emi: any;
  nombreUsuario!: string;
  receptor!: string;


  constructor(private api : ApiService, private router:Router, private http: HttpClient, public route:ActivatedRoute) {
  }

  chatForm = new FormGroup({
    mensaje : new FormControl(''),
    emisor : new FormControl(''),
    receptor : new FormControl(''),
    fecha : new FormControl('')
  })

  ngOnInit() {
    this.nombreUsuario = this.route.snapshot.paramMap.get('nombreUsuario')?? '';
    this.receptor = this.route.snapshot.paramMap.get('nombre') ?? '';
    this.chatForm = new FormGroup({
      mensaje : new FormControl(''),
      emisor : new FormControl(this.receptor),
      receptor : new FormControl(this.nombreUsuario),
      fecha : new FormControl('')
    });
    this.obtenerDatos()
  }

  obtenerDatos(){
    this.api.getChatR().subscribe(resp => {
      localStorage.getItem('token')
      this.emi = resp;
      console.log(this.emi)
    })
  }

  postChat(form :any){
    this.api.postChat1(form).subscribe(data =>{
      console.log(data);
      window.location.reload();
    })
  }


}
