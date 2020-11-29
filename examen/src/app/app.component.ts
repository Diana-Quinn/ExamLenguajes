import { Component,Input} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  @Input()
  nombre:string;
  @Input()
  descripcion:string;
  @Input()
  fecha;
  @Input()
  hora;

  datos: Array<Datos> = [];
   constructor() { }

  
  
   SendInfo(): void{
     this.datos.push(new Datos(this.nombre, this.descripcion, this.fecha, this.hora));
    alert("Datos insertados");
  }

 
 }

class Datos {
    nombre:string;
    descripcion:string;
    fecha;
    hora;
    constructor( nombre:string, descripcion:string, fecha, hora){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.fecha = fecha;
      this.hora = hora;
    }
  }


