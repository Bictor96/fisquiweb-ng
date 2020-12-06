import { Component } from '@angular/core';
import { Point, Text } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { BoardConnector } from './board-connector';
import { Button } from './button';
import { CircuitComponent } from './circuit-component';
import { ComponentText } from './component-text';

export class Resistance extends CircuitComponent {
  private upButton : Button;
  private downButton : Button;
  private resistanceValue : number;
  private resistanceText : ComponentText;
  constructor(x : number, y : number) {
    super('assets/resistencia.png', x , y);

    this.resistanceValue = 100;
    this.resistanceText = new ComponentText(this.resistanceValue.toFixed(0));
    this.resistanceText.position = new Point(-28, -12);

    this.upButton = new Button(2, -15, (event) => {
      this.incrementResistance();
    });

    this.downButton = new Button(0, 3, (event) => {
      this.decrementResistance();
    });

    this.downButton.angle = 180;
    this.downButton.position = new Point(37, 10);

    this.addChild(this.resistanceText);
    this.addChild(this.upButton);
    this.addChild(this.downButton);
    this.moveLeftConnection(92, 0);
    this.moveRightConnection(-100, 0);

    this.on('pointerdown', this.onClick);
  }

  setOnBoard(connector : BoardConnector ) : void {
    let TAG = connector.TAG;
    let position = connector.midPoint;
    if (TAG == 'left') {
      this.angle = -90;
    } else if (TAG == 'right') {
      this.angle = 90;
    } 

    this.position = position;
    this.boardConnector = connector;
  }

  getResistance() : number { return this.resistanceValue; }

  onRemoved(circuitData : CircuitData) : void {
    circuitData.resistance -= this.resistanceValue;
  }

  updateData(circuitData : CircuitData) : void {
    console.log("Updating resistance");
    circuitData.resistance += this.resistanceValue;
  };

  private onClick(event) {
    console.log(event.data.getLocalPosition(this));
  }

  private incrementResistance() {
    if (this.resistanceValue < 100) {
      this.updateResistance(10);
      this.parent.emit('resistance-updated', 10);
    }
  }

  private decrementResistance() {
    if (this.resistanceValue > 0) {
      this.updateResistance(-10);
      this.parent.emit('resistance-updated', -10);
    }
  }

  private updateResistance(quantity : number) {
    this.resistanceValue += quantity;
    this.resistanceText.text = this.resistanceValue.toFixed(0);
  }
}