import { BaseAnimation } from './base-animation';
import { EnergyObject } from './classes/energy-object';

import { Line } from './classes/line';
import { EnergyData } from '../classes/energy-data';
import { Ticker } from 'pixi.js';
import { EnergyLines } from './classes/energy-lines';
/**
 * TODO
 * - [x] Tickers: No paran
 */
export class EnergyAnimation extends BaseAnimation {
  private energyObject : EnergyObject;
  private energyLines : EnergyLines;
  private energyData : EnergyData;

  private INITIAL_Y;
  private TOP_Y = 10;

  constructor(data : EnergyData) {
    super();
    this.energyData = data;
  }
  
  setup() {
    const screen = this.getApp().screen;
    this.INITIAL_Y = screen.height - 50;
    this.setupAnimationElements(screen);
    this.animate();
  }
  
  animate() {
    this.getApp().ticker.add(this.setupAnimation, this);
  }

  startDropTicker() : void {
    this.getApp().ticker.remove(this.setupAnimation, this);
    this.getApp().ticker.add(this.dropAnimation, this);
  }


  getEnergyData() : EnergyData {
    return this.energyData;
  }

  getInitialPoint() : number {
    return this.INITIAL_Y;
  }

  private setupAnimationElements(screen : PIXI.Rectangle) {
    this.energyObject = new EnergyObject(this.energyData, screen.width - 200, this.INITIAL_Y-50, this.TOP_Y);
    this.energyLines = new EnergyLines(this);
    this.setupBotline();
    this.addToStage(this.energyObject); 
  }


  private dropAnimation(delta) : void {
    if (!this.energyObject.canMove()|| Number.isNaN(this.energyData.getVelocity())) {
      console.log("Stopping Drop Ticker");
      this.energyObject.setOnInitialPosition();
      this.stopDropTicker();
    }

    // Actualizar posicion del objeto.
    this.energyObject.y += (this.energyData.getVelocity() / 16) * delta;
    this.energyData.position = (380-this.energyObject.y)/10;

    // Actualizar tamaño lineas
    this.energyLines.updateLines();
  }

  private setupAnimation(delta) {
    this.energyLines.updateLines();
  }

  private stopDropTicker() : void {
    // Limpiar animacion
    this.getApp().ticker.remove(this.dropAnimation, this);
    this.getApp().ticker.add(this.setupAnimation, this);
}


  private setupBotline() : void {
    const botLine = new Line(0, this.INITIAL_Y, 0x639bff, 2);
    botLine.incrementX(screen.width);
    this.addToStage(botLine)
  }
}