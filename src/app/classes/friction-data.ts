export class FrictionData {
  mass : number;
  frictionCoeficient: number;
  velocity : number;
  appliedForce : number;
  time : number;

  GRAVITY = 10

  constructor(mass : number = 0.0, coeficient : number = 0.3) {
    this.mass = Number(mass);
    this.frictionCoeficient = Number(coeficient);
    this.velocity = 0;
    this.appliedForce = 0;
    this.time = 0;
  }

  clearOutputData() {
    this.velocity = 0;
    this.appliedForce = 0;
    this.time = 0;
  }

  getStaticForce() : number {
    return Number(this.frictionCoeficient * (this.mass * this.GRAVITY));
  }
}