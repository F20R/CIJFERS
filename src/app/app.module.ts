import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PerfilComponent } from './perfil/perfil.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { ChatComponent } from './chat/chat.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import { GaleriaComponent } from './galeria/galeria.component';
import { NuevaImagenComponent } from './nueva-imagen/nueva-imagen.component';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { EditcontactoComponent } from './editcontacto/editcontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    ContactosComponent,
    PerfilComponent,
    CrearContactoComponent,
    ChatComponent,
    GaleriaComponent,
    NuevaImagenComponent,
    CrearPerfilComponent,
    EditcontactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
