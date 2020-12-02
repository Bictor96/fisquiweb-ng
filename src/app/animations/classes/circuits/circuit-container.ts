import { AnimationContainer } from '../animation-container';
import { CircuitBase } from './circuit-base';
import { Resistance } from './resistance';

export class CircuitContainer extends AnimationContainer {
  private base : CircuitBase;

  constructor() {
    super(500, 500, 0x303030);
    this.base = new CircuitBase();


    this.addChild(this.base);
  }
}