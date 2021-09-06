import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: any;
  nombre: string;
  email: string;
  genero: string;
  id: number;

  constructor(private router: Router) {
    this.nombre = "";
    this.email="";
    this.genero="";
    this.id=0;
   }

  ngOnInit(): void {
    this.nombre = this.user.name;
    this.email = this.user.email;
    this.genero = this.user.id;

    this.id = this.user.id;
  }

  verDetalles():void{
    //alert("usted va a ver los detalles");
    this.router.navigate(['dashboard/usuario'], {queryParams: {id : this.id}})
  }

}
