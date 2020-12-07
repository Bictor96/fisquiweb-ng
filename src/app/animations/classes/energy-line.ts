import { Text } from 'pixi.js';
import {Line} from './line';

// TODO : AÑADIR NOMBRE DEBAJO DE LA LINEA
export class EnergyLine extends Line {
  private label : Text;
  private textColor = 0xcbdbfc;
  private fontSize = 20;

  constructor(label : string, x = 0, y = 0, labelMargin = -30, color = 0xcbdbfc) {
    super(x, y, color, 20)
    this.label = new Text(label, {
      fontFamily : 'Arial',
      fontSize: this.fontSize,
      fill: this.textColor,
      align: 'center'
    });

    this.label.x = labelMargin;
    this.label.y += 10;

    this.addChild(this.label);
  }
}