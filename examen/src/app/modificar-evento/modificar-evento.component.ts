import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Datos} from '../nuevo-evento/nuevo-evento.component';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.scss'],
})
export class ModificarEventoComponent implements OnInit {

  public nombre: string;
  public descripcion: string;
  public fecha: any;
  public hora: any;
  public editando = false;
  public indiceEdicion = 0;

  datos: Array<any> = [];

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));
  }

  actualizarDatos(){
    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));
  }

  modificar(i: number): void{

    this.datos = JSON.parse(this.cookie.get('cookie-eventos'));

    try{
      this.datos.forEach((evento, index) => {
        if (evento.fecha === this.fecha && evento.hora === this.hora && index !== i){
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

    this.datos[i] = new Datos(this.nombre, this.descripcion, this.fecha, this.hora);
    alert('Datos insertados');
    this.cookie.set('cookie-eventos', JSON.stringify(this.datos));
    console.log(JSON.parse(this.cookie.get('cookie-eventos')));

  }

}
