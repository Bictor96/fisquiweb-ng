import { PixiUtils } from 'src/app/utils/pixi-utils';
import { AnimationContainer } from '../animation-container';
import { CircuitComponent } from './circuit-component';
import { BoardContainer } from './board-container';
import { ComponentConection } from './component-conection';
import { Resistance } from './resistance';
import { LongWire, ShortWire } from './wire';
import { Ammeter } from './ammeter';
import { Voltimeter } from './voltimeter';
import { ParallelResistance } from './parallel_resistance';

export class ComponentsContainer extends AnimationContainer {
  private circuit : BoardContainer;
  private resistance : Resistance;
  private resistance2 : Resistance;
  private longWire : LongWire;
  private longWire2 : LongWire;
  private shortWire : ShortWire;
  private ammeter : Ammeter;
  private voltimeter : Voltimeter;
  private parallelResistance : ParallelResistance;

  constructor(circuitContainer : BoardContainer) {
    super(250, 500, 0x424242);
    this.circuit = circuitContainer;
    this.resistance = new Resistance(120, 100);
    this.resistance2 = new Resistance(180, 180);
    this.longWire = new LongWire(120, 150);
    this.longWire2 = new LongWire(120, 250);
    this.shortWire = new ShortWire(100, 200);
    this.ammeter = new Ammeter(120, 300);
    this.voltimeter = new Voltimeter(170, 300);
    this.parallelResistance = new ParallelResistance(50, 50);

    this.addChild(this.resistance);
    this.addChild(this.resistance2);
    this.addChild(this.longWire);
    this.addChild(this.shortWire);
    this.addChild(this.longWire2);
    this.addChild(this.ammeter);
    this.addChild(this.voltimeter);
    this.addChild(this.parallelResistance);

    this.on('moving', this.onComponentMoving, this.parent);
  }

  setComponent(component : CircuitComponent) {
    component.setParent(this);
  }

  private onComponentMoving(component : CircuitComponent) : void {
    this.circuit.isComponentOnConnector(component);
  }
}