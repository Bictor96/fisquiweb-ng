import { Graphics, Sprite, Texture } from 'pixi.js';
import { CustomSpriteClass } from '../custom-sprite-class';

export class ComponentConection extends Sprite {
  direction : string;

  constructor(direction : string, x : number, y : number) {
    super(Texture.EMPTY);
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.width = 4;
    this.height = 4;

    this.on('pointerdown', this.onClick)
  }

  private onClick() : void {
    if (this.direction == 'left') {
      this.angle -= 90;
    } else if (this.direction == 'right') {
      this.angle += 90;
    }
  }
}