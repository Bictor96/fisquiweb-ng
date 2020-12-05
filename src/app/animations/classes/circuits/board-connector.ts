import { Container, Point } from 'pixi.js';
import { PixiUtils } from 'src/app/utils/pixi-utils';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';

export class BoardConnector extends Container {
  midPoint : Point;
  leftConnection : ComponentConection;
  rightConnection : ComponentConection;
  TAG : string

  constructor(TAG : string, midPoint : Point, leftPosition : Point, rightPosition : Point) {
    super();
    this.TAG = TAG;
    this.midPoint = midPoint;
    this.leftConnection = new ComponentConection('base-left', leftPosition.x, leftPosition.y)
    this.rightConnection = new ComponentConection('base-right', rightPosition.x, rightPosition.y);
    this.on('moving', this.onComponentMoved);
  }

  canConnect(component : CircuitComponent) : boolean {
    console.log("isNear: " + this.isComponentNear(component));
    if (this.isComponentNear(component)) {
      return true;
    } else { 
      return false;
    }
  } 

  private onComponentMoved(component : CircuitComponent) : void {
    if (!this.isComponentNear(component)) {
      console.log("Desensamblar");
      this.parent.emit("component-removed", component);
    }
  }

  private isComponentNear(component : CircuitComponent) : boolean {
    let isNearRightSide = this.areConnectorsNear(component.leftConnection, this.leftConnection) 
            && this.areConnectorsNear(component.rightConnection, this.rightConnection);

    let isNearUpsideDown = this.areConnectorsNear(component.leftConnection, this.rightConnection) 
    && this.areConnectorsNear(component.rightConnection, this.leftConnection);
  
    return isNearRightSide || isNearUpsideDown;
  }

  private areConnectorsNear(componentConnector  : ComponentConection, boardConnector : ComponentConection) : boolean {
    let componentPosition = componentConnector.getGlobalPosition();
    let basePosition = boardConnector.getGlobalPosition();
    let distance = PixiUtils.distanceBetweenPoints(componentPosition, basePosition);
    return distance <= 15;
  }
}