import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSortHeader } from '@angular/material/sort';
import { WaveData } from '../classes/wave-data';
import { BaseAnimation } from './base-animation';
import { Line } from './classes/line';
import { WaveLine } from './classes/wave-line';

export class WaveAnimation extends BaseAnimation {
  private waveLine : WaveLine;
  private height : number;
  private width : number;
  private waveData : WaveData;

  constructor(waveData : WaveData) {
    super();
    this.waveData = waveData;
  }
  
  setup() : void {
    this.height = this.getApp().screen.height/2;
    this.width = this.getApp().screen.width;
    this.waveLine = new WaveLine(this.waveData, 0,this.height/2);

    this.addToStage(this.waveLine);
  }

  animate() : void {
    this.waveLine.plotSine(this.height, this.width, 0);
    this.getApp().ticker.add(this.moveLine, this);
  }

  private step = 0;
  private moveLine() :  void {
    this.waveLine.plotSine(this.height, this.width, this.step);
    this.step += 4;
  }
}