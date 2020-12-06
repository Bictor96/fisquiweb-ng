export class CircuitData {
  totalVoltage : number;
  resistance : number;

  constructor() {
    this.totalVoltage = 0;
    this.resistance = 0;
  }

  getIntensity() : number {
    return this.totalVoltage / this.resistance;
  }

  getVoltage(resistance : number) : number {
    return resistance * this.getIntensity();
  }
}