import { BaseAnimation } from './base-animation';
import { EnergyObject } from './classes/energy-object';

export class EnergyAnimation extends BaseAnimation {
  private energyObject : EnergyObject
  
  setup() {
    const screen = this.getApp().screen;
    this.energyObject = new EnergyObject(screen.width - 200, screen.height - 100);
    this.addToStage(this.energyObject);
  }
  
  animate() {

  }
}