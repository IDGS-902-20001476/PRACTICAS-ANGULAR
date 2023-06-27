import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinepolisComponent } from '../cinepolis/cinepolis.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CinepolisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],exports: [
    CinepolisComponent,
  ]
})
export class CineModule { }
