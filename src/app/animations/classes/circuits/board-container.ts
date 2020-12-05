import { AnimationContainer } from '../animation-container';
import { CircuitBase } from './circuit-base';
import { CircuitComponent } from './circuit-component';
import { ComponentsContainer } from './components-container';

export class BoardContainer extends AnimationContainer {
  private base : CircuitBase;
  private componentContainer : ComponentsContainer;

  constructor() {
    super(600, 500, 0x303030);
    this.base = new CircuitBase();
    this.componentContainer = new ComponentsContainer(this);

    this.addChild(this.base);
    this.addChild(this.componentContainer);
    this.componentContainer.moveContainer(560, 0);

    this.setupCoordsOnClick()
    
    this.on('component-removed', this.onComponentRemoved);
  }

  setupCoordsOnClick() : void {
    this.interactive = true;
    this.buttonMode = true;
    this.on('pointerdown', this.onClick);
  }

  onClick(event) {
    console.log(event.data.global);
  }

  isComponentOnConnector(component : CircuitComponent) : void {
    this.base.setIfComponentOnConnector(component);
  }

  private onComponentRemoved(component : CircuitComponent) : void {
    console.log("Component Removed received");
    if (component != null) {
      this.componentContainer.setComponent(component);
    }
  }
}