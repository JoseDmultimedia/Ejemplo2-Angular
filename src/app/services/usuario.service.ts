import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private textoService = new Subject<string>();
  

  constructor() { }

  modificarTexto(texto:string):void{
    console.log(texto);
    this.textoService.next(texto);
  }

  getTexto(): Observable<string>{
    return this.textoService.asObservable();
  }

}
