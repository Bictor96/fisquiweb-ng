import { Graphics, Sprite, Texture } from 'pixi.js';
import { CustomSpriteClass } from '../custom-sprite-class';

export class ComponentConection extends Sprite {
  connectionZone : Graphics;
  direction : string;

  constructor(direction : string, x : number, y : number) {
    super(Texture.EMPTY);
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.width = 4;
    this.height = 4;
    this.drawZone();

    this.on('pointerdown', this.onClick)
  }

  drawZone() : void {
    this.connectionZone = new Graphics();
    this.connectionZone.lineStyle(1, 0xFF0000);
    let circle = this.connectionZone.drawEllipse(this.x, this.y, this.width, this.height);
    this.addChild(circle);
  }

  private onClick(event) : void {
    if (this.direction == 'left') {
      this.angle -= 90;
    } else if (this.direction == 'right') {
      this.angle += 90;
    }
  }
}