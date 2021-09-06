import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioxService } from 'src/app/services/usuariox.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: string;
  nombre: string;
  email:string;
  genero: string;
  status: string;

  constructor(private aRoute: ActivatedRoute, private usuarioxService: UsuarioxService) { 
    //this.id = this.aRoute.snapshot.paramMap.get('id')!;
    this.nombre = "";
    this.email = "";
    this.genero = "";
    this.status = "";

    this.id = "";

    this.aRoute.queryParams.pipe(filter(params => params.id)).subscribe(params =>{
      //console.log(params.id);
      this.id = params.id;
    });

    this.usuarioxService.getUsuario(this.id).subscribe(data  =>{
      this.nombre = data.data.name;
      this.email = data.data.email;
      this.genero = data.data.gender;
      this.status = data.data.status;
    })
  }

  ngOnInit(): void {
  }

 
}
