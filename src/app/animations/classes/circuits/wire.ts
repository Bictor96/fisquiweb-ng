import { Point } from 'pixi.js';
import { DraggableSprite } from '../draggable-sprite';
import { BoardConnector } from './board-connector';
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
  
  setOnBoard(connector : BoardConnector ) : void {
    let TAG = connector.TAG;
    let position = connector.midPoint;
    if (TAG == 'left') {
      this.angle = -90;
    }  else if (TAG == 'right') {
      this.angle = 90;
    }  
    
    this.position = position;
    this.boardConnector = connector;
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

  setOnBoard(connector : BoardConnector ) : void {
    let TAG = connector.TAG;
    let position = connector.midPoint;
    this.position = position;
    this.boardConnector = connector;
  }
}