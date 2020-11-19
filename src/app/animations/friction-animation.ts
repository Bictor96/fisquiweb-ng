import { FrictionData } from '../classes/friction-data';
import { BaseAnimation } from './base-animation';
import { FrictionInterval } from './classes/friction-interval';
import { FrictionObject } from './classes/friction-object';

export class FrictionAnimation extends BaseAnimation {
  frictionObject : FrictionObject;
  frictionData : FrictionData;
  private calculationInterval : FrictionInterval;


  setup() : void {
    this.frictionData = new FrictionData(0.3, 0.5);
    this.frictionObject = new FrictionObject('assets/ball.png', 30, this.getApp().screen.height / 2, this.frictionData);

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
    this.setTicker(this.getApp().ticker.add((delta) => {
      if (this.frictionObject.isAppliedForceEnough()) {
        
        // Comprobar si paso el punto de parada.
        if (!this.frictionObject.isPassXCoord(500)) {
          this.createCalculationIntervalIfDontExist();
        } else {
          this.clearCalculationIntervalIfExist();
        }

        this.frictionObject.moveObject(delta);
      } else {
        this.premovementAnimation()
      }
    }, this));
  }

  private movementAnimation(delta) : void {
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