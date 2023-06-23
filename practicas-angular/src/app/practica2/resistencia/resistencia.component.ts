import { Component } from '@angular/core';
class Config {
  static BAND_COLORS: { [key: string]: string } = {
    '0': '#000000',
    '1': '#964B00',
    '2': '#FF0000',
    '3': '#FFA500',
    '4': '#FFFF00',
    '5': '#008000',
    '6': '#0000FF',
    '7': '#EE82EE',
    '8': '#808080',
    '9': '#FFFFFF'
  };

  static TOLERANCE_COLORS: { [key: string]: string } =  {
    oro: '#FFD700',
    plata: '#C0C0C0'
  };

  static TOLERANCE_VALUES: { [key: string]: number } = {
    oro: 0.5,
    plata: 0.1
  };

  static MULTIPLICADOR: { [key: string]: string } = {
    '0': '#000000',
    '1': '#964B00',
    '2': '#FF0000',
    '3': '#FFA500',
    '4': '#FFFF00',
    '5': '#008000',
    '6': '#0000FF',
    '7': '#EE82EE',
    '8': '#808080',
    '9': '#FFFFFF',
    '10': '#FFD700',
    '11': '#C0C0C0'
  };
}

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  
  banda1 = '';
  banda2 = '';
  multiplicador = '';
 tolerancia = '';
  hexaBanda1 = '';
  hexaBanda2 = '';
  hexaMultip = '';
  hexaTolerancia = '';
  valorResistencia = '';
  max_valor = '';
  min_valor = '';
  valorTolerancia = 0;

  CalcularResistencia() {
    this.hexaBanda1 = this.getHexaColor(this.banda1);
    console.log(this.hexaBanda1);
    console.log(this.banda1);
    this.hexaBanda2 = this.getHexaColor(this.banda2);
    this.hexaMultip = this.getHexaMultiplierColor(this.multiplicador);
    this.hexaTolerancia = this.getHexaToleranceColor(this.tolerancia);

    const value1 = parseInt(this.banda1 + this.banda2);
    const value2 = parseInt(this.multiplicador);

    this.valorResistencia = (value1 * Math.pow(10, value2)).toString();

    const valorNominal = value1 * Math.pow(10, value2);

    if (this.tolerancia === 'oro') {
      this.valorTolerancia = 0.05;
    } else if (this.tolerancia === 'plata') {
      this.valorTolerancia = 0.1;
    } else {
      this.valorTolerancia = this.getToleranceValue(this.tolerancia);
    }

    this.max_valor = (valorNominal * (1 + this.valorTolerancia)).toString();
    this.min_valor = (valorNominal * (1 - this.valorTolerancia)).toString();
  }

  public getHexaColor(color: string): string {
    return Config.BAND_COLORS[color] || '';
  }

  public getHexaToleranceColor(color: string): string {
    return Config.TOLERANCE_COLORS[color] || '';
  }

  private getToleranceValue(color: string): number {
    return Config.TOLERANCE_VALUES[color] || 0;
  }

  public getHexaMultiplierColor(color: string): string {
    return Config.MULTIPLICADOR[color] || '';
  }
}


