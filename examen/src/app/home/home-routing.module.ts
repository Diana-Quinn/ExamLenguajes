import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {NuevoEventoComponent} from '../nuevo-evento/nuevo-evento.component';
import {ModificarEventoComponent} from '../modificar-evento/modificar-evento.component';
import {EliminarEventoComponent} from '../eliminar-evento/eliminar-evento.component';
import {MenuComponent} from '../menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [{
      path: '',
      redirectTo: 'registrar'
    },
      {
      path: 'registrar',
      component: NuevoEventoComponent
    }, {
      path: 'modificar',
      component: ModificarEventoComponent
    }, {
      path: 'eliminar',
      component: EliminarEventoComponent
    }, ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
