import { BaseAnimation } from '../../base-animation';
import { Calibre } from '../calibre';
import { CustomSpriteClass } from '../custom-sprite-class';
import { BoardContainer } from './board-container';
import { CircuitBase } from './circuit-base';

export class CircuitsAnimation extends BaseAnimation {
  private circuitContainer : BoardContainer;

  constructor () {
    super();
    this.circuitContainer = new BoardContainer();
  }

  setup() {
    this.addToStage(this.circuitContainer);
  }

  animate() {

  }
}