import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CardComponent } from './Components/dashboard/card/card.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { InicioAppComponent } from './Components/inicio-app/inicio-app.component';
import { ListadoUsuariosComponent } from './Components/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './Components/dashboard/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    InicioComponent,
    InicioAppComponent,
    ListadoUsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
