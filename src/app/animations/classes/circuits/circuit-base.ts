import { Component } from '@angular/core';
import { PixiUtils } from 'src/app/utils/pixi-utils';
import { CustomSpriteClass } from '../custom-sprite-class';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';

export class CircuitBase extends CustomSpriteClass {
  private topConnectionLeft : ComponentConection;
  private topConnectionRight : ComponentConection;
  
  constructor() {
    super('assets/circuit-base.png', 0, 0);
    this.topConnectionLeft = new ComponentConection('base-left', 0, 0);
    this.topConnectionRight = new ComponentConection('base-right', 0, 0);

    this.topConnectionLeft.x = 142;
    this.topConnectionLeft.y = 39;
    this.topConnectionLeft.connectionZone.width=3;
    this.topConnectionLeft.connectionZone.height=3;

    this.topConnectionRight.x = 165;
    this.topConnectionRight.y = 39;

    this.topConnectionRight.connectionZone.width=3;
    this.topConnectionRight.connectionZone.height=3;

    this.addChild(this.topConnectionLeft);
    this.addChild(this.topConnectionRight);
  }

  setIfComponentOnConnector(component : CircuitComponent) : ComponentConection {
    if (this.checkComponentConnections(component, this.topConnectionLeft, this.topConnectionRight)) {
      return this.topConnectionLeft;
    }

    return null;
  }

  private checkComponentConnections(component : CircuitComponent , leftConnection : ComponentConection, rightConnection : ComponentConection) : boolean {
    return (this.areConnectorsNear(component.leftConnection, leftConnection) && this.areConnectorsNear(component.rightConnection, rightConnection)) || 
           (this.areConnectorsNear(component.rightConnection, leftConnection) && this.areConnectorsNear(component.leftConnection, rightConnection));
  }

  private areConnectorsNear(componentConnector : ComponentConection, baseConnector : ComponentConection) {
    let componentPosition = componentConnector.getGlobalPosition();
    let basePosition = baseConnector.getGlobalPosition();
    let distance = PixiUtils.distanceBetweenPoints(componentPosition, basePosition);
    return distance <= 5;
  }
}