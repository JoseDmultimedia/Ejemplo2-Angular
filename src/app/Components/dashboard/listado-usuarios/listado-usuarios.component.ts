import { Component, OnInit } from '@angular/core';
import { UsuarioxService } from 'src/app/services/usuariox.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuariosData: any[];
  cargando: boolean;
  paginaActual: number;
  totalPagina: number;

  constructor(private usuarioxService: UsuarioxService) {
    this.listaUsuariosData=[];
    this.cargando = true;
    this.paginaActual = 1;
    this.totalPagina = 1;
    // this.usuarioxService.getUsuarios().subscribe(data =>{
    //   console.log(data);
    //   this.cargando = false;
    //   this.listaUsuariosData = data.data;
    //   this.paginaActual = data.meta.pagination.page;
    //   this.totalPagina = data.meta.pagination.pages;
    //   
    // })
    this.obtenerUsuarios();
   }

  ngOnInit(): void {
  }

  paginaAnterior(): void{
    this.paginaActual --;
    this.obtenerUsuarios();
  }

  paginaSiguiente(): void{
    this.paginaActual ++;
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void{
    this.usuarioxService.getUsuarios(this.paginaActual).subscribe(data =>{
      console.log(data);
      this.cargando = false;
      this.listaUsuariosData = data.data;
      this.paginaActual = data.meta.pagination.page;
      this.totalPagina = data.meta.pagination.pages;
    })
  }
}
