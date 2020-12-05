import { Point } from 'pixi.js';
import { DraggableSprite } from '../draggable-sprite';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';

export class LongWire extends CircuitComponent {
  constructor(x : number, y : number) {
    super('assets/long_wire.png', x, y);
    this.addChild(this.leftConnection);
    this.addChild(this.rightConnection);

    
    this.moveRightConnection(92, 0);
    this.moveLeftConnection(-100, 0);
  }
  
  setOnBoard(TAG : string, position : Point ) : void {
    console.log("Setting to " + position);
    if (TAG == 'left') {
      this.angle = -90;
    }  else if (TAG == 'right') {
      this.angle = 90;
    }  
    
    this.position = position;
  }
}

export class ShortWire extends CircuitComponent {
  constructor(x : number, y : number) {
    super('assets/short_wire.png', x, y);

    this.addChild(this.leftConnection);
    this.addChild(this.rightConnection);

    this.moveRightConnection(9, 2);
    this.moveLeftConnection(-13, 2);
  }

  setOnBoard(TAG : string, position : Point ) : void {
    console.log("Setting to " + TAG);
    this.position = position;
  }
}