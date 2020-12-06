import { Point, Text } from 'pixi.js';
import { AnimationContainer } from '../animation-container';
import { Button } from './button';
import { CircuitBase } from './circuit-base';
import { CircuitComponent } from './circuit-component';
import { ComponentsContainer } from './components-container';

export class BoardContainer extends AnimationContainer {
  private base : CircuitBase;
  private componentContainer : ComponentsContainer;
  private upButton : Button;
  private downButton : Button;

  constructor() {
    super(600, 500, 0x303030);
    this.base = new CircuitBase();
    this.componentContainer = new ComponentsContainer(this);

    this.addChild(this.base);
    this.setupButtons(); // Tiene que estar debajo del momento donde se añade la base al Container.
    this.addChild(this.componentContainer);
    this.componentContainer.moveContainer(560, 0);

    //this.setupCoordsOnClick()
    this.on('component-removed', this.onComponentRemoved);
  }

  setupCoordsOnClick() : void {
    this.interactive = true;
    this.buttonMode = true;
    this.on('pointerdown', this.onClick);
  }

  onClick(event) {
    console.log(event.data.getLocalPosition(this));
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

  private setupButtons() {
    this.upButton = new Button(390, 50, () => {
      this.base.incrementVoltage();
    });

    this.downButton = new Button(425, 75, () => {
      this.base.decrementVoltage();
    });

    this.downButton.angle = 180;

    this.addChild(this.upButton);
    this.addChild(this.downButton); 
  }
}