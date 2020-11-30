import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-eliminar-evento',
  templateUrl: './eliminar-evento.component.html',
  styleUrls: ['./eliminar-evento.component.scss'],
})
export class EliminarEventoComponent implements OnInit {

  public nombre: string;
  public descripcion: string;
  public fecha: any;
  public hora: any;

  datos: Array<any> = [];

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));
  }

  eliminar(i: number){
    this.datos.splice(i, 1);
    this.cookie.set('cookie-eventos', JSON.stringify(this.datos));
  }

  actualizarDatos(){
    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));
  }



}
