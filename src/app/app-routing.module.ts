import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {ContactosComponent} from "./contactos/contactos.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {CrearContactoComponent} from "./crear-contacto/crear-contacto.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'contacto', component:ContactosComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'crear', component:CrearContactoComponent},
  {path:'chat', component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
