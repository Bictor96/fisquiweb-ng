import { Text } from 'pixi.js';
import {Line} from './line';

// TODO : AÑADIR NOMBRE DEBAJO DE LA LINEA
export class EnergyLine extends Line {
  private label : Text;
  private textColor = 0x000000;
  private fontSize = 14;

  constructor(label : string, x = 0, y = 0, labelMargin = -25, color = 0x000000) {
    super(x, y, color, 20)
    this.label = new Text(label, {
      fontFamily : 'Arial',
      fontSize: this.fontSize,
      fill: this.textColor,
      align: 'center'
    });

    this.label.x = labelMargin;

    this.addChild(this.label);
  }
}