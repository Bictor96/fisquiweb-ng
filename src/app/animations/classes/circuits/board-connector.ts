import { Container, Point } from 'pixi.js';
import { PixiUtils } from 'src/app/utils/pixi-utils';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';
import { Voltimeter } from './voltimeter';

export class BoardConnector extends Container {
  midPoint : Point;
  leftConnection : ComponentConection;
  rightConnection : ComponentConection;
  TAG : string
  occupied = false;
  private connectedComponent : CircuitComponent;

  constructor(TAG : string, midPoint : Point, leftPosition : Point, rightPosition : Point) {
    super();
    this.TAG = TAG;
    this.midPoint = midPoint;
    this.leftConnection = new ComponentConection('base-left', leftPosition.x, leftPosition.y)
    this.rightConnection = new ComponentConection('base-right', rightPosition.x, rightPosition.y);
    this.on('moving', this.onComponentMoved);
    this.on('resistance-updated', (value) => {
      this.parent.emit('resistance-updated', value);
    })
  }

  canConnect(component : CircuitComponent) : boolean {
    // El voltimetro es el unico componente que se puede poner en un
    // conector ya ocupado
    if (this.occupied && component.constructor.name != Voltimeter.name ) {
      return false;
    }

    if (this.isComponentNear(component)) {
      return true;
    } else { 
      return false;
    }
  } 

  setConnectedComponent(component : CircuitComponent) : void {
    if (component.constructor.name == Voltimeter.name) { return; }
    this.occupied = true;
    this.connectedComponent = component;
  }

  getConnectedComponent() : CircuitComponent {
    return this.connectedComponent;
  }

  private onComponentMoved(component : CircuitComponent) : void {
    if (!this.isComponentNear(component)) {
      this.parent.emit("component-removed", component);
      
      if (component.constructor.name == Voltimeter.name) { return; }
      this.occupied = false;
      this.connectedComponent = null;
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