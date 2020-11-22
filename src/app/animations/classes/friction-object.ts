import { time } from 'console';
import { FrictionData } from 'src/app/classes/friction-data';
import { CustomSpriteClass } from './custom-sprite-class';
import { Line } from './line';

export class FrictionObject extends CustomSpriteClass {
  private frictionData : FrictionData;
  private forceLine : Line;

  constructor(asset : string, x: number, y : number, frictionData : FrictionData ) {
    super(asset, x, y);
    this.frictionData = frictionData;
    this.forceLine = new Line(0, 0, 0x000000, 20);

    this.addChild(this.forceLine);
  }

  isAppliedForceEnough() : Boolean {
    return this.frictionData.appliedForce > this.frictionData.getStaticForce();
  }

  incrementAppliedForce() : void {
    this.frictionData.appliedForce += 0.01;
  }

  incrementLine() : void {
    this.forceLine.incrementX(this.frictionData.appliedForce * 10);
  }

  moveObject(delta : number) : void {
    this.incrementX(this.frictionData.velocity * delta);
  }

  stop() : void {
    this.frictionData.clearOutputData()
    this.x = 0;
    this.forceLine.draw(0, 0);
  }

  isPassXCoord(x : number) {
    return this.x >= x;
  }

  setVelocityInGivenTime(timeInSeconds : number) : void {
    console.log("Mass: " + this.frictionData.mass );
    console.log("Time: " + timeInSeconds);
    console.log("Acceleration: " + this.getAcceleration());
    console.log("Applied Force: " + this.frictionData.appliedForce);
    console.log("Static Force: " + this.frictionData.getStaticForce());
    this.frictionData.time = timeInSeconds;
    this.frictionData.velocity = (this.frictionData.velocity + this.getAcceleration() * timeInSeconds) / 10;
    console.log("Velocidad " + this.frictionData.velocity);
  }

  private getAcceleration() : number {
    return (this.frictionData.appliedForce / this.frictionData.getStaticForce()) / this.frictionData.mass;
  }
}