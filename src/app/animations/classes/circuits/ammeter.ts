import { Point } from 'pixi.js';
import { CircuitComponent } from './circuit-component';

export class Ammeter extends CircuitComponent {
  constructor(x : number, y : number) {
    super('./assets/amperimetro.png', x, y);

    this.moveLeftConnection(-17, -55);
    this.moveRightConnection(7, -55);

    this.on('pointerdown', this.onClick);
  }

  private onClick(event) {
    console.log(event.data.getLocalPosition(this));
  }

  setOnBoard(TAG : string, position : Point ) : void {
    console.log("Setting to " + position);
    let newPos = new Point(position.x + 3, position.y + 55);
    this.position = newPos;
  }

}