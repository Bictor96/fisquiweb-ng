import { Container, Sprite, Texture } from 'pixi.js';
import { Vector } from 'src/app/utils/vector';
import { Line } from './line';

export class AnimationContainer extends Container {
  private background : Sprite;
  
  constructor(width : number, height : number, color : number) {
    super();
    this.background = new Sprite(Texture.WHITE);
    this.background.width = width;
    this.background.height = height;
    this.background.tint = color;
    this.addChild(this.background);
  }

  moveContainer(x : number, y : number) : void{
    this.x = x;
    this.y = y;
  }

  addLine(position : Vector, color : number) : Line {
    let line = new Line(position.x, position.y, color, 2);
    this.addChild(line);
    return line;
  }
}