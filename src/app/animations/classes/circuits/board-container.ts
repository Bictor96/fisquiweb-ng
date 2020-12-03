import { AnimationContainer } from '../animation-container';
import { CircuitBase } from './circuit-base';
import { CircuitComponent } from './circuit-component';
import { ComponentConection } from './component-conection';

export class BoardContainer extends AnimationContainer {
  private base : CircuitBase;
  private components : CircuitComponent[];

  constructor() {
    super(500, 500, 0x303030);
    this.base = new CircuitBase();
    this.components = [];

    this.addChild(this.base);
    this.on('moving', this.onComponentMoving);
  }

  isComponentOnConnector(component : CircuitComponent) : ComponentConection {
    return this.base.setIfComponentOnConnector(component);
  }

  addComponent(component : CircuitComponent) {
    this.components.push(component);
    this.addChild(component);
  }

  private onComponentMoving(component : CircuitComponent) : void {
    let connection = this.base.setIfComponentOnConnector(component);
    if (connection == null) {
      this.parent.emit('component-removed', component, this.parent);
      this.removeChild(component);
    }
  }
}