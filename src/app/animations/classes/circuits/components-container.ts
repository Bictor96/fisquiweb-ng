import { AnimationContainer } from '../animation-container';
import { Resistance } from './resistance';
import { LongWire, ShortWire } from './wire';

export class ComponentsContainer extends AnimationContainer {
  private resistance : Resistance;
  private longWire : LongWire;
  private shortWire : ShortWire;

  constructor() {
    super(250, 500, 0x424242);
    this.resistance = new Resistance(120, 100);
    this.longWire = new LongWire(120, 150);
    this.shortWire = new ShortWire(100, 200);

    this.addChild(this.resistance);
    this.addChild(this.longWire);
    this.addChild(this.shortWire);
  }
}