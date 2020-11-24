import {Line} from './line';

// TODO : AÑADIR NOMBRE DEBAJO DE LA LINEA
export class EnergyLine extends Line {
  constructor(x = 0, y = 0, color = 0x000000) {
    super(x, y, color, 20)
  }
}