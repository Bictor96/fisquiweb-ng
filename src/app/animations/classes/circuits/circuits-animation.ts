import { BaseAnimation } from '../../base-animation';
import { Calibre } from '../calibre';
import { CustomSpriteClass } from '../custom-sprite-class';
import { CircuitBase } from './circuit-base';
import { CircuitContainer } from './circuit-container';
import { ComponentsContainer } from './components-container';

export class CircuitsAnimation extends BaseAnimation {
  private baseContainer : CircuitContainer;
  private componentsContainer : ComponentsContainer;

  constructor () {
    super();
    this.baseContainer = new CircuitContainer();
    this.componentsContainer = new ComponentsContainer();
  }

  setup() {
    this.addToStage(this.baseContainer);
    this.addToStage(this.componentsContainer);

    this.componentsContainer.moveContainer(500, 0);
  }

  animate() {

  }
}