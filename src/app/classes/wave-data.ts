export class WaveData {
  private frequency : number;
  private amplitude : number;

  constructor(frequency : number, amplitude : number) {
    this.frequency = frequency;
    this.amplitude = amplitude;
  }

  getFrequency() : number {
    return this.frequency;
  }

  getAmplitude() : number {
    return this.amplitude;
  }
}