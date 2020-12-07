import { Point } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { Ammeter } from './ammeter';
import { BoardConnector } from './board-connector';
import { CircuitBase } from './circuit-base';
import { CircuitComponent } from './circuit-component';
import { ParallelResistance } from './parallel_resistance';
import { ShortWire } from './wire';

export default class BoardConnectors {
  private topConnector : BoardConnector;
  private leftConnector : BoardConnector;
  private bottomConnector : BoardConnector;
  private rightConnector : BoardConnector;

  private circuitData : CircuitData;

  constructor(board : CircuitBase) {
    this.circuitData = board.getCircuitData();

    this.setupTopConnector();
    this.setupLeftConnector();
    this.setupBottomConnector();
    this.setupRightConnector();

    board.addChild(this.topConnector);
    board.addChild(this.leftConnector);
    board.addChild(this.bottomConnector);
    board.addChild(this.rightConnector);
  }

  setIfNearEnough(component : CircuitComponent) : boolean {
    if (this.topConnector.canConnect(component)) {
      this.setComponent(this.topConnector, component);
      return true;
    } else if (this.leftConnector.canConnect(component)) {
      this.setComponent(this.leftConnector, component);
      return true;
    } else if (this.bottomConnector.canConnect(component)) {
      this.setComponent(this.bottomConnector, component);
      return true;
    } else if (this.rightConnector.canConnect(component)) {
      this.setComponent(this.rightConnector, component);
      return true;
    } else {
      return false;
    }
  }

  allOcuppied() : boolean {
    return this.topConnector.occupied && this.bottomConnector.occupied && 
      this.leftConnector.occupied && this.rightConnector.occupied;
  }

  private setComponent(connector : BoardConnector, component : CircuitComponent) : void {
    if (connector.hasParallelResistance() && this.isAllowedOnParallel(component) ) {
      let resistance = <ParallelResistance>connector.getConnectedComponent();
      resistance.onConnectingComponent(component, this.circuitData);
      return;
    }
    
    connector.setConnectedComponent(component);
    component.onConnect(connector, this.circuitData);
    if (this.allConnectorsOccupied()) {
      console.log("All ocupied");
    }
  }

  private isAllowedOnParallel(component) : boolean {
    let type = component.constructor.name;
    return type == Ammeter.name || type == ShortWire.name
  }

  private allConnectorsOccupied() : boolean {
    return this.topConnector.occupied && this.leftConnector.occupied 
      && this.bottomConnector.occupied && this.rightConnector.occupied;
  }

  private setupTopConnector() {
    let midPoint = new Point(198, 48);
    let leftPoint = new Point(187, 48);
    let rightPoint = new Point(206, 48);
    this.topConnector = new BoardConnector('top', midPoint, leftPoint, rightPoint);
  }

  private setupLeftConnector() {
    let midPoint = new Point(52, 221);
    let leftPoint = new Point(52, 316);
    let rightPoint = new Point(52, 120);
    this.leftConnector = new BoardConnector('left', midPoint, leftPoint, rightPoint);
  }

  private setupBottomConnector() {
    let midPoint = new Point(295, 418);
    let leftPoint = new Point(194, 418);
    let rightPoint = new Point(403, 418);
    this.bottomConnector = new BoardConnector('bot', midPoint, leftPoint, rightPoint);
  }

  private setupRightConnector() {
    let midPoint = new Point(530, 229);
    let leftPoint = new Point(530, 124);
    let rightPoint = new Point(530, 314);
    this.rightConnector = new BoardConnector('right', midPoint, leftPoint, rightPoint);
  }
}