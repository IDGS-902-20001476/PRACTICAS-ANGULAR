import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  Nombre: string = '';
  Personas: number = 0;
  Tarjeta: string = '';
  Entradas: number = 0;
  Total: string = '';

  Calcular(): string {
    const boletas = this.Entradas;
    const tarCineco = this.Tarjeta;
    const nCompradores = this.Personas;
    const precio = 12;
    let total = precio * boletas;
    const cantMaxBol = nCompradores * 7;
    let t = 0;

    if (cantMaxBol < boletas) {
      this.Total = '¡Sólo siete boletos por persona!';
      return this.Total;
    } else {
      if (boletas > 5) {
        if (tarCineco === 'si') {
          const pDesc = total - total * 0.15;
          t = pDesc - pDesc * 0.1;
        } else {
          t = total - total * 0.15;
        }
      } else if (boletas === 3 || boletas === 4 || boletas === 5) {
        if (tarCineco === 'si') {
          const pDesc = total - total * 0.1;
          t = pDesc - pDesc * 0.1;
        } else {
          t = total - total * 0.1;
        }
      } else {
        if (tarCineco === 'si') {
          t = total - total * 0.1;
        } else {
          t = total;
        }
      }
    }

    this.Total = this.Nombre + ' tu total es: ' + t.toString();
    return this.Total;
  }
}

