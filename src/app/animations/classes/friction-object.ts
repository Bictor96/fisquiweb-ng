import { time } from 'console';
import { FrictionData } from 'src/app/classes/friction-data';
import { CustomSpriteClass } from './custom-sprite-class';
import { Line } from './line';

export class FrictionObject extends CustomSpriteClass {
  private frictionData : FrictionData;
  private forceLine : Line;
  private appliedForce : number;
  private velocity : number;

  constructor(asset : string, x: number, y : number, frictionData : FrictionData ) {
    super(asset, x, y);
    this.frictionData = frictionData;
    this.forceLine = new Line(0, 0, 0x000000, 20);
    this.appliedForce = 0;
    this.velocity = 1;

    this.addChild(this.forceLine);
  }

  isAppliedForceEnough() : Boolean {
    return this.appliedForce > this.frictionData.getStaticForce();
  }

  incrementAppliedForce() : void {
    this.appliedForce += 0.01;
  }

  incrementLine() : void {
    this.forceLine.incrementX(this.appliedForce * 10);
  }

  moveObject(delta : number) : void {
    this.incrementX(this.velocity * delta);
  }

  isPassXCoord(x : number) {
    return this.x >= x;
  }

  setVelocityInGivenTime(timeInSeconds : number) : void {
    console.log("Time: " + timeInSeconds);
    this.velocity = (this.velocity + this.getAcceleration() * timeInSeconds) / 100;
    console.log(this.velocity);
  }

  private getAcceleration() : number {
    return (this.appliedForce / this.frictionData.getStaticForce()) / this.frictionData.mass;
  }
}