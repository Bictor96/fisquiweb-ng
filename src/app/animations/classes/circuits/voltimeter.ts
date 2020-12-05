import { Point } from 'pixi.js';
import { CircuitComponent } from './circuit-component';

export class Voltimeter extends CircuitComponent {
  constructor(x : number, y : number) {
    super('assets/voltimeter.png', x , y);

    this.moveLeftConnection(-97, 69);
    this.moveRightConnection(92, 68);

    this.on('pointerdown', this.onClick);
  }

  private onClick(event) {
    console.log(event.data.getLocalPosition(this));
  }

  setOnBoard(TAG : string, position : Point ) : void {
    console.log("Setting to " + position);
    if (TAG == 'left') {
      this.position = new Point(position.x + 70, position.y + 8);
    } else if (TAG == 'bot') {
      this.position = new Point(position.x, position.y - 69 );
    } else if (TAG == 'right') {
      this.position = new Point(position.x - 70, position.y - 8);
    }
  }

}