import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioxService } from 'src/app/services/usuariox.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaUsarios: any[];
  listaUsuariosData: any[];
  texto: string;

  constructor(private usuarioService: UsuarioService, private usuarioxService: UsuarioxService ) { 
    this.listaUsarios = [
    {nombre:"Juanito Perez", email:"algo1algo", genero:"algo1"},
    {nombre:"Alejandro G", email:"algo2algo", genero:"algo2"},
    {nombre:"Camila O", email:"algo3algo", genero:"algo3"},
    {nombre:"Maria V", email:"algo4algo", genero:"algo4"},
    {nombre:"Camilo J", email:"algo5algo", genero:"algo5"}];

    this.texto = "";
    this.listaUsuariosData=[];
    
    // this.usuarioxService.getUsuarios().subscribe(data =>{
    //   console.log(data);
    //   this.listaUsuariosData = data.data;
    // })
  }

  ngOnInit(): void {
  }

  onChange(evento: string): void{
    this.usuarioService.modificarTexto(this.texto);
  }

}
