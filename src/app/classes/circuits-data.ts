export class CircuitData {
  totalVoltage : number;
  resistance : number;

  constructor() {
    this.totalVoltage = 0;
    this.resistance = 0;
  }

  getIntensity(resistance = this.resistance) : number {
    return this.totalVoltage / resistance;
  }

  getVoltage(resistance : number) : number {
    return resistance * this.getIntensity();
  }
}