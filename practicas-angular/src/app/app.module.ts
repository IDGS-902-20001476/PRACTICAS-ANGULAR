import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistenciaComponent } from './practica2/resistencia/resistencia.component';
import { ResisModule } from './practica2/resis/resis.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResisModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
