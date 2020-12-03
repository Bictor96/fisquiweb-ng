import { AnimationContainer } from '../animation-container';
import { BoardContainer } from './board-container';
import { CircuitComponent } from './circuit-component';
import {ComponentsContainer} from './components-container';

export class CircuitContainer extends AnimationContainer {
  private boardContainer : BoardContainer
  private componentsContainer : ComponentsContainer;
   
  constructor() {
    super(800, 640, 0xFFFFFF);
    this.boardContainer = new BoardContainer();
    this.componentsContainer = new ComponentsContainer(this.boardContainer);

    this.addChild(this.boardContainer);
    this.addChild(this.componentsContainer);

    this.componentsContainer.moveContainer(500, 0);

    this.on('component-removed', this.onComponentRemoved);
  }

  private onComponentRemoved(component : CircuitComponent) : void {
    console.log("Removed received");
    this.componentsContainer.addChild(component);
  }
}