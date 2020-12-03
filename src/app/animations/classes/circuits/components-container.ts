import { PixiUtils } from 'src/app/utils/pixi-utils';
import { AnimationContainer } from '../animation-container';
import { CircuitComponent } from './circuit-component';
import { BoardContainer } from './board-container';
import { ComponentConection } from './component-conection';
import { Resistance } from './resistance';
import { LongWire, ShortWire } from './wire';

export class ComponentsContainer extends AnimationContainer {
  private circuit : BoardContainer;
  private resistance : Resistance;
  private longWire : LongWire;
  private shortWire : ShortWire;

  constructor(circuitContainer : BoardContainer) {
    super(250, 500, 0x424242);
    this.circuit = circuitContainer;
    this.resistance = new Resistance(120, 100);
    this.longWire = new LongWire(120, 150);
    this.shortWire = new ShortWire(100, 200);

    this.addChild(this.resistance);
    this.addChild(this.longWire);
    this.addChild(this.shortWire);

    this.on('moving', this.onComponentMoving, this.parent);
    this.on('component-removed', this.onComponentRemoved);
  }

  private onComponentRemoved(component : CircuitComponent) {
    console.log("component removed");
  }

  private onComponentMoving(component : CircuitComponent) : void {
    let connection = this.circuit.isComponentOnConnector(component);
    if (connection != null ) {
      this.removeChild(component);
      this.circuit.addComponent(component);

      component.setDragging(false);
      component.x = connection.getGlobalPosition().x;
      component.y = connection.y;
    }
  }
}