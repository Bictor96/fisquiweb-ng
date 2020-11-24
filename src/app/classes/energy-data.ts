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
    this.totalEnergy = this.getPotentialEnergy()
  }

  setMaximumPositionToActual() : void {
    this.maxPosition = this.position;
  }

  getKinematicEnergy() : number {
    return 0;
  }

  getHeat() : number {
    return 0;
  }

  getTotalEnergy() {
    return 0;
  }

  getVelocity() : number {
    return 0
  }

}