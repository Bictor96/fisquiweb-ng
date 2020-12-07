 
import {Graphics} from 'pixi.js';

export class Line  extends Graphics {
  x : number;
  y : number;
  color : number;
  strokeWitdh : number;

  constructor(x : number, y : number, color : number, strokeWidth : number) {
    super()
    this.x = x; 
    this.y = y;
    this.color = color;
    this.strokeWitdh = strokeWidth;
  }

  incrementX(xIncrement : number) {
    this.draw(xIncrement, 0);
  }

  draw(xLength : number, yLength : number) : void {
    this.clear();
    this.lineStyle(this.strokeWitdh, this.color);
    this.lineTo(xLength, yLength)
  }

  move(x : number, y : number) {
    this.x = x;
    this.y = y;
    this.moveTo(x, y);
  }
}