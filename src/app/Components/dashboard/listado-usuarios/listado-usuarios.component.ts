import { Component, OnInit } from '@angular/core';
import { UsuarioxService } from 'src/app/services/usuariox.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuariosData: any[];

  constructor(private usuarioxService: UsuarioxService) {
    this.listaUsuariosData=[];
    
    this.usuarioxService.getUsuarios().subscribe(data =>{
      console.log(data);
      this.listaUsuariosData = data.data;
    })
   }

  ngOnInit(): void {
  }

}
