import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.scss'],
})
export class NuevoEventoComponent implements OnInit {

  public nombre: string;
  public descripcion: string;
  public fecha = '';
  public hora = '';

  datos: Array<Datos> = [];

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));
  }

  SendInfo(): void{

    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));

    try{
      this.datos.forEach(evento => {
        if (evento.fecha === this.fecha && evento.hora === this.hora){
          throw false;
        }
      });
      if (this.fecha === '' || this.hora === '' || this.fecha === undefined || this.hora === undefined){
        throw false;
      }
    }catch (e){
      alert('Esa fecha y hora estan ocupadas o son invalidas');
      return;
    }

    console.log(this.hora);
    this.datos.push(new Datos(this.nombre, this.descripcion, this.fecha, this.hora));
    alert('Datos insertados');
    this.cookie.set('cookie-eventos', JSON.stringify(this.datos));
    console.log(JSON.parse(this.cookie.get('cookie-eventos')));

  }

  actualizarDatos(){
    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));
  }

}

export class Datos {
  nombre: string;
  descripcion: string;
  fecha;
  hora;
  constructor( nombre: string, descripcion: string, fecha, hora){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.hora = hora;
  }
}
