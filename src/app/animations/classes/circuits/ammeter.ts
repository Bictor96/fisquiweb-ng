import { JsonPipe } from '@angular/common';
import { Point, Text } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { BoardConnector } from './board-connector';
import { CircuitComponent } from './circuit-component';
import { ComponentText } from './component-text';

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
    let position = connector.midPoint;;
    let newPos = new Point(position.x + 3, position.y + 55);
    this.position = newPos;
    this.boardConnector = connector;
  }

  updateData(circuitData : CircuitData) : void {
    this.update(circuitData);
  };

  updateLabel(circuitData : CircuitData) : void {
    this.update(circuitData);
  }

  private update(circuitData : CircuitData) : void {
    console.log("Updating Ammeter");
    let intensity = circuitData.getIntensity();
    console.log(intensity);
    if (isNaN(intensity)) {
      intensity = 0.0
    }
    
    this.label.text = intensity.toFixed(2);
  }
}