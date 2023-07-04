import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistenciaComponent } from './practica2/resistencia/resistencia.component';
import { ResisModule } from './practica2/resis/resis.module';
import { CinepolisComponent } from './practica3/cinepolis/cinepolis.component';
import { CineModule } from './practica3/cine/cine.module';
import { MenuComponent } from './menu/menu.component';
import { DistanciaComponent } from './practica1/distancia/distancia.component';
import { DistModule } from './practica1/dist/dist.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizModule } from './practica4/piz/piz.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResisModule,
    CineModule,
    DistModule,
    BrowserAnimationsModule,
    PizModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
