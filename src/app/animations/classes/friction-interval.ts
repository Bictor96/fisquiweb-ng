import { FrictionObject } from './friction-object';

export class FrictionInterval {
  private interval : NodeJS.Timeout
  constructor(object : FrictionObject) {
    this.startInterval(object);
  }
  
  startInterval(object : FrictionObject) : void {
    let time = 0;
    let increment = 100;
    this.interval = setInterval(() => {
      console.log("Hey there");
      object.incrementAppliedForce();
      object.setVelocityInGivenTime(time / 1000);
      time += increment
    }, increment);
  }

  clearInterval() : void {
    clearInterval(this.interval);
    this.interval = null;
  }
}