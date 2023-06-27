import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistenciaComponent } from './practica2/resistencia/resistencia.component';
import { ResisModule } from './practica2/resis/resis.module';
import { CinepolisComponent } from './practica3/cinepolis/cinepolis.component';
import { CineModule } from './practica3/cine/cine.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResisModule,
    CineModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
