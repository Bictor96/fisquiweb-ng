import {Graphics, Sprite, Texture} from 'pixi.js';

export class CustomSpriteClass extends Sprite {
  constructor(assetPath : string, x : number, y : number) {
    super(Texture.from(assetPath));
    this.move(x, y);
  }

  move(x : number, y : number) : void {
    this.x = x;
    this.y = y;
  }

  incrementX(x : number) : void {
    this.x += x;
  }

  incrementY(y : number) : void {
    this.y += y;
  }
}