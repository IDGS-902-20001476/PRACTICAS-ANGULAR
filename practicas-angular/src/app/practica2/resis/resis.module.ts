import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciaComponent } from '../resistencia/resistencia.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResistenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],exports:[
    ResistenciaComponent
  ]
})
export class ResisModule { }
