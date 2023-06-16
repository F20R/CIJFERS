import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {ContactosComponent} from "./contactos/contactos.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {CrearContactoComponent} from "./crear-contacto/crear-contacto.component";
import {ChatComponent} from "./chat/chat.component";
import {AuthGuard} from "./auth.guard";
import {GaleriaComponent} from "./galeria/galeria.component";
import {NuevaImagenComponent} from "./nueva-imagen/nueva-imagen.component";

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'contacto', component:ContactosComponent ,canActivate: [AuthGuard]},
  {path:'perfil', component:PerfilComponent},
  {path:'crear', component:CrearContactoComponent},
  {path:'chat/:nombreUsuario', component:ChatComponent},
  {path:'galeria', component:GaleriaComponent, canActivate: [AuthGuard]},
  {path:'nuevaImagen', component:NuevaImagenComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
