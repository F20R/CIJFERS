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
  rece:any;


  constructor(private api : ApiService, private router:Router, private http: HttpClient, public route:ActivatedRoute) {
  }

  chatForm = new FormGroup({
    mensaje : new FormControl(''),
    emisor : new FormControl(''),
    receptor : new FormControl('jimmy'),
    fecha : new FormControl('')
  })

  ngOnInit() {
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
    })
  }


}
