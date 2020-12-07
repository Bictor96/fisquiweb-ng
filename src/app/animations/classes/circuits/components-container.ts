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
  private resistance3 : Resistance;
  private longWire : LongWire;
  private longWire2 : LongWire;
  private shortWire : ShortWire;
  private shortWire2 : ShortWire;
  private shortWire3 : ShortWire;
  private ammeter : Ammeter;
  private voltimeter : Voltimeter;
  private parallelResistance : ParallelResistance;

  constructor(circuitContainer : BoardContainer) {
    super(350, 500, 0x303030);
    this.circuit = circuitContainer;
    this.resistance = new Resistance(250, 80);
    this.resistance2 = new Resistance(250, 120);
    this.resistance3 = new Resistance(250, 160);
    this.parallelResistance = new ParallelResistance(250, 240);
    this.longWire = new LongWire(250, 320);
    this.longWire2 = new LongWire(250, 340);
    this.voltimeter = new Voltimeter(250, 450);
    this.shortWire = new ShortWire(50, 240);
    this.shortWire2 = new ShortWire(50, 260);
    this.shortWire3 = new ShortWire(50, 280);
    this.ammeter = new Ammeter(50, 400);


    this.addChild(this.resistance);
    this.addChild(this.resistance2);
    this.addChild(this.resistance3);
    this.addChild(this.longWire);
    this.addChild(this.shortWire);
    this.addChild(this.shortWire2);
    this.addChild(this.shortWire3);
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