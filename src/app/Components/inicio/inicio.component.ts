import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  texto: string;

  constructor(private usuarioService: UsuarioService) {
    this.texto="";
    this.usuarioService.getTexto().subscribe(data =>{
      console.log(data);
      this.texto = data;
    })
   }

  ngOnInit(): void {
  }

}
