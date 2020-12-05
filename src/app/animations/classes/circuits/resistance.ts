import { Component } from '@angular/core';
import { Point } from 'pixi.js';
import { CustomSpriteClass } from '../custom-sprite-class';
import { DraggableSprite } from '../draggable-sprite';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';

export class Resistance extends CircuitComponent {
  constructor(x : number, y : number) {
    super('assets/resistencia.png', x , y);

    this.moveLeftConnection(92, 0);
    this.moveRightConnection(-100, 0);
  }

  setOnBoard(TAG : string, position : Point ) : void {
    console.log("Setting to " + position);
    if (TAG == 'left') {
      this.angle = -90;
    } else if (TAG == 'right') {
      this.angle = 90;
    } 

    this.position = position;
  }
}