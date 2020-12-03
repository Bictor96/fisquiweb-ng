import { BaseAnimation } from '../../base-animation';
import { Calibre } from '../calibre';
import { CustomSpriteClass } from '../custom-sprite-class';
import { CircuitBase } from './circuit-base';
import { CircuitContainer } from './circuit-container';

export class CircuitsAnimation extends BaseAnimation {
  private circuitContainer : CircuitContainer;

  constructor () {
    super();
    this.circuitContainer = new CircuitContainer();
  }

  setup() {
    this.addToStage(this.circuitContainer);
  }

  animate() {

  }
}