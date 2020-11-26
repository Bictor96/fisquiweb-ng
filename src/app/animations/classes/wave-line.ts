import { WaveData } from 'src/app/classes/wave-data';
import { Line } from './line';

export class WaveLine extends Line {
  private waveData : WaveData;
  constructor(data : WaveData, x : number, y : number,) {
    super(x, y, 0x000000, 2);
    this.waveData = data;
  }

  plotSine(height : number, width : number, xOffset : number) : void {
    this.resetLine();
    let x = -1;
    let y = 0;
    
    while (x < width) {
      y = height / 2 + this.waveData.getAmplitude() * Math.sin((x+xOffset)/this.waveData.getFrequency());
      this.lineTo(x, y)
      x++;
    }
  }

  private resetLine() {
    this.clear();
    this.lineStyle(this.strokeWitdh, this.color);
  }
}