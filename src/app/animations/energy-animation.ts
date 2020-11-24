import { BaseAnimation } from './base-animation';
import { EnergyObject } from './classes/energy-object';

import {EnergyLine} from './classes/energy-line';
import { Line } from './classes/line';
import { EnergyData } from '../classes/energy-data';

export class EnergyAnimation extends BaseAnimation {
  private energyObject : EnergyObject
  private potentialLine : EnergyLine;
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
    this.createSetupTicker();
  }

  private setupAnimationElements(screen : PIXI.Rectangle) {
    this.energyObject = new EnergyObject(this.energyData, screen.width - 200, this.INITIAL_Y-50, this.TOP_Y);
    this.potentialLine = new EnergyLine(40, this.INITIAL_Y);
    const botLine = new Line(0, this.INITIAL_Y, 0xFF0000, 2);
    
    botLine.incrementX(screen.width);
    
    this.addToStage(botLine)
    this.addToStage(this.energyObject);
    this.addToStage(this.potentialLine); 
  }

  private createSetupTicker() {
    this.getApp().ticker.add((delta) => {
      this.potentialLine.draw(0, -(this.energyData.getPotentialEnergy()));
    });
  }
}