import { FrictionData } from '../classes/friction-data';
import { BaseAnimation } from './base-animation';
import { FrictionInterval } from './classes/friction-interval';
import { FrictionObject } from './classes/friction-object';

export class FrictionAnimation extends BaseAnimation {
  frictionObject : FrictionObject;
  frictionData : FrictionData;
  private calculationInterval : FrictionInterval;

  SCANNER_POINT : number = 500;
  STOP_POINT : number = 760;

  constructor(frictionData : FrictionData) {
    super();
    this.frictionData = frictionData;
  }

  setup() : void {
    this.frictionObject = new FrictionObject('assets/kinematic_ball.png', 30, this.getApp().screen.height / 2, this.frictionData);
    this.addToStage(this.frictionObject);
  }

  animate() : void {
    if (this.hasTicker()) {
      this.start()
    } else {
      this.createTicker();
      if (!this.getApp().ticker.started) {
        this.start();
      }
    }
  }

  private createTicker() : void {
    this.frictionData.appliedForce = 0;
    this.frictionObject.resetForceLine();
    this.setTicker(this.getApp().ticker.add((delta) => {
      if (this.frictionObject.isAppliedForceEnough()) {
        this.movementAnimation(delta);
      } else {
        this.premovementAnimation()
      }
    }, this));
  }

  private movementAnimation(delta) : void {
    // Comprobar si paso el punto de parada.
    if (!this.frictionObject.isPassXCoord(this.SCANNER_POINT)) {
      this.createCalculationIntervalIfDontExist();
      this.frictionObject.moveObject(delta);
    } else {
      this.clearCalculationIntervalIfExist();
      if (this.frictionObject.isPassXCoord(this.STOP_POINT)) {
        console.log("PASS STOP POINT");
        this.frictionObject.stop();
        this.stop();
      } else 
        this.frictionObject.moveObject(delta);
    }
  }

  private createCalculationIntervalIfDontExist() : void{
    if (this.calculationInterval == null) 
      this.calculationInterval = new FrictionInterval(this.frictionObject);
  }

  private clearCalculationIntervalIfExist() : void {
    if (this.calculationInterval != null) {
      this.calculationInterval.clearInterval();
      this.calculationInterval = null;
    }
  }


  // Incrementa fuerza y aumenta la longitud de la linea.
  private premovementAnimation() : void {
    this.frictionObject.incrementAppliedForce();
    this.frictionObject.incrementLine();
  }

  private getRandomInt(max) : number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}