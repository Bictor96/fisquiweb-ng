import { Component } from '@angular/core';
import { Point, Rectangle } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { Ammeter } from './ammeter';
import { BoardConnector } from './board-connector';
import { CircuitComponent } from './circuit-component';
import { ComponentText } from './component-text';
import { ParallelResistanceComponent } from './parallel-resistance-component';
import { ParallelResistanceConnector } from './parallel-resistance-connector';
import { ShortWire } from './wire';

export class ParallelResistance extends CircuitComponent {
  private topResistance : ParallelResistanceComponent;
  private botResistance : ParallelResistanceComponent;

  private topConnectors : ParallelResistanceConnector;
  private botConnectors : ParallelResistanceConnector;

  private totalResistance : number;

  constructor(x : number, y : number) {
    super('./assets/resistencia_paralela.png', x, y);
    let labelPos = new Point(-20, -35);
    let upPos = new Point(25, -45);
    let downPos = new Point(25, -25);
    this.topResistance = new ParallelResistanceComponent(this, labelPos, upPos, downPos);

    labelPos = new Point(-20, 15);
    upPos = new Point(25, 5);
    downPos = new Point(25, 25);
    this.botResistance = new ParallelResistanceComponent(this, labelPos, upPos, downPos);

    this.addChild(this.topResistance);
    this.addChild(this.botResistance);

    this.moveLeftConnection(-96, 2);
    this.moveRightConnection(96, 2);

    this.setupConnectors();

    this.totalResistance = this.calculateTotalResistance();

    this.on('component-removed', this.onComponentRemoved);
    this.on('resistance-updated', (value) => {
      let tempResistance = this.totalResistance;
      this.totalResistance = this.calculateTotalResistance();
      this.parent.emit('resistance-updated', this.totalResistance - tempResistance);
    });

    console.log("Bounds: " + JSON.stringify(this.getBounds()));
  }

  canConnect(component : CircuitComponent) : boolean {
    return this.topConnectors.canConnect(component) || this.botConnectors.canConnect(component);
  }

  updateData(circuitData : CircuitData) : void {
    console.log("Updating resistance");
    circuitData.resistance += this.getTotalResistance();
  };

  onRemoved(circuitData : CircuitData) : void {
    console.log("Updating resistance");
    circuitData.resistance -= this.getTotalResistance();
  }

  onConnectingComponent(component : CircuitComponent, data : CircuitData) {
    if (this.topConnectors.canConnect(component)) {
      this.topConnectors.occupied = true;
      component.onConnectToParallel(this.topConnectors);
    } else if (this.botConnectors.canConnect(component)) {
      this.botConnectors.occupied = true;
      component.onConnectToParallel(this.botConnectors);
    }
  }

  isInBounds(data) : boolean { 
    let clickPosition = data.getLocalPosition(this);
    let x = clickPosition.x;
    let y = clickPosition.y;

    if ((x > -29 && x <= 72) && (y > -50 && y <= 42)) {
      console.log("In Bound click");
      return true; 
    }
    else 
      return false;
  }

  getTotalResistance() : number {
    return this.totalResistance;
  }

  private calculateTotalResistance() : number {
    let topValue = this.topResistance.getResistance();
    let botValue = this.botResistance.getResistance();
    
    return (topValue * botValue) / (topValue + botValue);
  }

  setOnBoard(connector: BoardConnector) : void {
    let TAG = connector.TAG;
    let position = connector.midPoint;
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

    console.log("Total Res: " + this.getTotalResistance());
    this.boardConnector = connector;
  }

  private onComponentRemoved(component) {
    this.parent.emit('component-removed', component);
  }

  private setupConnectors() : void {
    let leftPosition = new Point(-59, -26);
    let rightPosition = new Point(-38, -26);
    let midPoint = new Point(-46, -26);
    this.topConnectors = new ParallelResistanceConnector(this.topResistance, 'top', midPoint, leftPosition, rightPosition);

    leftPosition = new Point(-59, 26);
    rightPosition = new Point(-38, 26);
    midPoint = new Point(-46, 26);
    this.botConnectors = new ParallelResistanceConnector(this.botResistance, 'bot', midPoint, leftPosition, rightPosition);

    this.addChild(this.topConnectors);
    this.addChild(this.botConnectors);
  }
}