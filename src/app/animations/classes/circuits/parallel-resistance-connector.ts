import { Container, Point } from 'pixi.js';
import { PixiUtils } from 'src/app/utils/pixi-utils';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';
import { ParallelResistanceComponent } from './parallel-resistance-component';

export class ParallelResistanceConnector extends Container {
  private leftConnection : ComponentConection;
  private rightConnection : ComponentConection;
  component : ParallelResistanceComponent
  midPoint : Point;
  occupied = false;
  TAG : string;

  constructor(component : ParallelResistanceComponent, TAG : string, midPoint : Point, leftPosition : Point, rightPosition : Point) {
    super();
    this.TAG = TAG;
    this.component = component;
    this.leftConnection = new ComponentConection('left', leftPosition.x, leftPosition.y);
    this.rightConnection = new ComponentConection('right', rightPosition.x, rightPosition.y);
    this.midPoint = midPoint;
    this.addChild(this.leftConnection);
    this.addChild(this.rightConnection);

    this.on("moving", (component) => {
      if (!this.isComponentNear(component)) {
        console.log("Removing");
        this.parent.emit("component-removed", component)
        this.occupied = false;
      }
    });
  }

  canConnect(component : CircuitComponent) : boolean {
    return this.isComponentNear(component) && !this.occupied
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
    return distance <= 10;
  }
}