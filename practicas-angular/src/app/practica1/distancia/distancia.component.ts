import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {

  x1!: number;
  x2!: number;
  y1!: number;
  y2!: number;
  resultado!: number;

  Calcular() {
    this.resultado = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
  }
}
