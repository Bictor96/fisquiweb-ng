import { Point } from 'pixi.js';
import { CircuitComponent } from './circuit-component';

export class ParallelResistance extends CircuitComponent {
  constructor(x : number, y : number) {
    super('./assets/resistencia_paralela.png', x, y);

    this.moveLeftConnection(-96, 2);
    this.moveRightConnection(96, 2);

    this.on('pointerdown', this.onClick);
  }

  private onClick(event) {
    console.log(event.data.getLocalPosition(this));
  }

  setOnBoard(TAG : string, position : Point ) : void {
    if (TAG == 'left') {
      this.position = new Point(position.x, position.y + 5);
      this.angle = 90;
    } else if (TAG == 'bot') {
      this.position = new Point(position.x - 3, position.y -1 );
      this.angle = 0;
    } else if (TAG == 'right') {
      this.angle = -90;
      this.position = new Point(position.x - 1, position.y - 5);
    }
  }
}