import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import {NuevoEventoComponent} from './nuevo-evento/nuevo-evento.component';
import {CookieService} from 'ngx-cookie-service';
import {ModificarEventoComponent} from './modificar-evento/modificar-evento.component';
import {EliminarEventoComponent} from './eliminar-evento/eliminar-evento.component';

@NgModule({
  declarations: [AppComponent, NuevoEventoComponent, ModificarEventoComponent, EliminarEventoComponent],
  entryComponents: [],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
