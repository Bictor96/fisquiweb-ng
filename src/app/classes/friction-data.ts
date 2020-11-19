export class FrictionData {
  mass : number;
  frictionCoeficient: number;

  constructor(mass : number = 0.0, coeficient : number = 0.0) {
    this.mass = mass;
    this.frictionCoeficient = coeficient;
  }

  getStaticForce() : number {
    return Number(this.frictionCoeficient * (this.mass * 10))
  }
}