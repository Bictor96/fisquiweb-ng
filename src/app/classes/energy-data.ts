export class EnergyData {
  friction : number;
  mass : number;
  initialVelocity : number;
  position : number;
  maxPosition : number;
  totalEnergy : number;

  private GRAVITY : number = 10;

  constructor(friction : number, mass : number, initialVelocity : number, position : number) {
    this.friction = friction;
    this.mass = mass;
    this.initialVelocity = initialVelocity;
    this.position = position;
    this.maxPosition = 0;
    this.totalEnergy = 0;
  }

  setPosition(position : number) : void {
    this.position = position;
  }

  getPotentialEnergy() : number {
    return this.mass * this.GRAVITY * this.position;
  }

  setTotalEnergyToPotential() : void {
    this.totalEnergy = this.getPotentialEnergy();
  }

  setMaximumPositionToActual() : void {
    this.maxPosition = this.position;
  }

  getHeat() : number {
    return -this.getFrictionForce() * this.getTraveledDistance();
  }

  getKinematicEnergy() : number {
    return this.totalEnergy - (-this.getHeat() + this.getPotentialEnergy());
  }

  getVelocity() : number {
    return (Number(this.initialVelocity) + Number(Math.sqrt(2 * this.getKinematicEnergy() / Number(this.mass))));
  }

  toString() : string {
    let msg = "-> " + JSON.stringify(this);
    msg += "\n-> TV: " + this.getTraveledDistance();
    msg += "\n-> PN: " + this.getPotentialEnergy();
    msg += "\n-> KN: " + this.getKinematicEnergy()
    msg += "\n-> H: " + this.getHeat();
    msg += "\n-> V: " + this.getVelocity();
    return msg;
  }

  private getFrictionForce() : number {
    return this.friction * this.mass * this.GRAVITY;
  }

  private getTraveledDistance() : number {
    return this.maxPosition - this.position;
  }
}