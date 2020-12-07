import { JsonPipe } from '@angular/common';
import { Point, Text } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { BoardConnector } from './board-connector';
import { CircuitComponent } from './circuit-component';
import { ComponentText } from './component-text';
import { ParallelResistanceConnector } from './parallel-resistance-connector';
import { ParallelResistance } from './parallel_resistance';

export class Ammeter extends CircuitComponent {
  private label : Text;
  constructor(x : number, y : number) {
    super('./assets/amperimetro.png', x, y);
    this.label = new ComponentText("0.0");

    this.moveLeftConnection(-17, -55);
    this.moveRightConnection(7, -55);

    this.addChild(this.label);
    this.label.x -= 20;
    this.label.y = 3;
  }

  setOnBoard(connector : BoardConnector) : void {
    let position = connector.midPoint;
    let newPos = new Point(position.x + 3, position.y + 55);
    this.position = newPos;
    this.boardConnector = connector;
  }

  setOnParallel(connector : ParallelResistanceConnector) : void {
    let newPoint = new Point();
    if (connector.TAG == 'bot') {
      let position = connector.midPoint;
      newPoint = new Point(position.x + 4, position.y + 55);
      this.position = newPoint;
    } else if (connector.TAG == 'top') {
      let position = connector.midPoint;
      newPoint = new Point(position.x + 4, position.y + 55);
    }

    this.position = newPoint;
    this.parallelConnector = connector;
  }

  updateData(circuitData : CircuitData) : void {
    this.update(circuitData);
  };

  updateLabel(circuitData : CircuitData) : void {
    this.update(circuitData);
  }

  resetLabel() : void {
    this.label.text = "0.0";
  }

  onRemoved(circuitData = new CircuitData()) : void {
    this.boardConnector = null;
    this.parallelConnector = null;
    this.resetLabel();
  }

  private update(circuitData : CircuitData) : void {
    if (this.parallelConnector != null) {
      let resistanceComponent = this.parallelConnector.component
      let totalResistance = resistanceComponent.parentResistance.getTotalResistance();
      let voltage = circuitData.getVoltage(totalResistance);
      let result = voltage / resistanceComponent.getResistance();
      console.log("Voltage: " + voltage);
      console.log("Resistance: " + resistanceComponent.getResistance());
      console.log("Result: " + result);
      this.label.text = result.toFixed(2);
      return;
    }

    let intensity = circuitData.getIntensity();
    console.log(intensity);
    if (isNaN(intensity)) {
      intensity = 0.0
    }
    this.label.text = intensity.toFixed(2);
  }
}