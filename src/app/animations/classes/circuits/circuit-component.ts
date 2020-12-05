import { InteractionEvent, Point } from 'pixi.js';
import { PixiUtils } from 'src/app/utils/pixi-utils';
import { DraggableSprite } from '../draggable-sprite';
import { ComponentConection } from './component-conection';

export class CircuitComponent extends DraggableSprite {
  leftConnection : ComponentConection;
  rightConnection : ComponentConection;

  constructor(asset : string, x : number, y : number) {
    super(asset, x, y);

    this.leftConnection = new ComponentConection('left', 0, 0);
    this.rightConnection = new ComponentConection('right', 0, 0);

    this
    .on('pointerdown', this.onDragStart)

    this.addChild(this.rightConnection);
    this.addChild(this.leftConnection);
  }

  moveRightConnection(x : number, y : number ) {
    this.rightConnection.x = x;
    this.rightConnection.y = y;
  }

  moveLeftConnection(x : number, y : number ) {
    this.leftConnection.x = x;
    this.leftConnection.y = y;
  }

  setOnBoard(TAG : string, position : Point ) : void {
    console.log("Setting to connector " + TAG);
    this.position = position;
  }

  onDragStart(event : InteractionEvent) : void {
    let position = event.data.global
    if (this.isOnLeftConnection(position)) {
      console.log("Click on connection detected");
      this.angle -= 90;
    }
    else if (this.isOnRightConnection(position)) {
      this.angle += 90;
    }
    else {
      this.setDragging(true);
      this.setData(event.data);
      this.alpha = 0.5;
    }
  } 

  private isOnLeftConnection(position : Point) : boolean {
    let connectionPosition = this.leftConnection.getGlobalPosition();
    return this.isOnConnectionPosition(connectionPosition, position);
  }

  private isOnRightConnection(position : Point) : boolean {
    let connectionPosition = this.rightConnection.getGlobalPosition();
    return this.isOnConnectionPosition(connectionPosition, position);
  }

  private isOnConnectionPosition(connectionPosition : Point, position : Point) : boolean {
    let distance = PixiUtils.distanceBetweenPoints(connectionPosition, position);
    console.log("Angulo: " + this.angle);
    if (distance <= 4.0) {
      return true;
    }

    return false;
  } 
}