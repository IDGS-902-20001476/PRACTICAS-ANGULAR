import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistenciaComponent } from './practica2/resistencia/resistencia.component';
import { CinepolisComponent } from './practica3/cinepolis/cinepolis.component';
import { DistanciaComponent } from './practica1/distancia/distancia.component';
import { PizzasComponent } from './practica4/pizzas/pizzas.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'resis',component: ResistenciaComponent},
  {path: 'cine',component: CinepolisComponent },
  {path: 'dist',component: DistanciaComponent},
  {path: 'piz',component: PizzasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
