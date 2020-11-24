export class EnergyData {
  friction : number;
  mass : number;
  initialVelocity : number;
  position : number;

  constructor(friction : number, mass : number, initialVelocity : number, position : number) {
    this.friction = friction;
    this.mass = mass;
    this.initialVelocity = initialVelocity;
    this.position = position;
  }

  getPotentialEnergy() : number {
    return 0;
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