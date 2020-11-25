import { BaseAnimation } from './base-animation';
import { EnergyObject } from './classes/energy-object';

import { Line } from './classes/line';
import { EnergyData } from '../classes/energy-data';
import { Ticker } from 'pixi.js';
import { EnergyLines } from './classes/energy-lines';
/**
 * TODO
 * - [] Tickers: No paran
 * - [] Input : Que el incremento sea decimal
 * - [] Input : No pueda haber valores negativos
 */
export class EnergyAnimation extends BaseAnimation {
  private energyObject : EnergyObject;
  private energyLines : EnergyLines;
  private energyData : EnergyData;

  private setupTicker : Ticker;
  private dropTicker : Ticker;

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
    this.createSetupTicker();
  }

  startDropTicker() : void {
    console.log("Starting drop ticker")
    this.setupTicker.stop();
    if (this.dropTicker == null) {
      this.createDropTicker();
    } else {
      this.dropTicker.start();
    }
  }

  stopSetupTicker() : void {
    this.setupTicker.stop();
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

  private createSetupTicker() {
    this.setupTicker = this.getApp().ticker.add((delta) => {
      console.log("Hi");
      this.energyLines.updatePotentialLine();
    });
  }

  private createDropTicker() : void {
    this.dropTicker = this.getApp().ticker.add((delta) => {
      if (!this.energyObject.canMove()|| Number.isNaN(this.energyData.getVelocity())) {
        console.log("Stopping Drop Ticker");
        this.energyObject.setOnInitialPosition();
        this.dropTicker.stop();;
      }
  
      // Actualizar posicion del objeto.
      this.energyObject.y += (this.energyData.getVelocity() / 16) * delta;
      this.energyData.position = (380-this.energyObject.y)/10;
      // Actualizar tamaño lineas
      this.energyLines.updateLines();
    });

    this.startDropTicker();
  }

  private stopDropTicker() : void {
      // Limpiar animacion


      this.setupTicker.start();
  }

  private setupBotline() : void {
    const botLine = new Line(0, this.INITIAL_Y, 0xFF0000, 2);
    botLine.incrementX(screen.width);
    this.addToStage(botLine)
  }
}