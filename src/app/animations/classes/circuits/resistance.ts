import { Component } from '@angular/core';
import { CustomSpriteClass } from '../custom-sprite-class';
import { DraggableSprite } from '../draggable-sprite';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';

export class Resistance extends CircuitComponent {
  constructor(x : number, y : number) {
    super('assets/resistencia.png', x , y);

    this.moveLeftConnection(-92, -4);
    this.moveRightConnection(100, -4);

    this.addChild(this.rightConnection);
    this.addChild(this.leftConnection);
  }
}