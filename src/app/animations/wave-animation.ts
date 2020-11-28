import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSortHeader } from '@angular/material/sort';
import { Calibre } from './classes/calibre';
import { WaveData } from '../classes/wave-data';
import { BaseAnimation } from './base-animation';
import { Line } from './classes/line';
import { WaveLine } from './classes/wave-line';
import { EventEmitter } from '@angular/core';

export class WaveAnimation extends BaseAnimation {
  private waveLine : WaveLine;
  private height : number;
  private width : number;
  private waveData : WaveData;
  private calibre : Calibre;

  private running = false;

  constructor(waveData : WaveData) {
    super();
    this.waveData = waveData;
  }
  
  setup() : void {
    this.height = this.getApp().screen.height/2;
    this.width = this.getApp().screen.width;
    this.waveLine = new WaveLine(this.waveData, 0,this.height/2);
    this.calibre = new Calibre();

    this.addToStage(this.waveLine);
    this.addToStage(this.calibre);
  }

  animate() : void {
    if (!this.running) {
      this.getApp().ticker.add(this.moveLine, this);
      this.running = true;
    }
  }

  updateWaveData(data : WaveData) : void {
    this.waveData = data;
    this.waveLine.updateWaveData(data);
  }

  stop() : void {
    this.running = false;
    this.getApp().ticker.remove(this.moveLine, this);
  }

  private step = 0;
  private moveLine() :  void {
    this.waveLine.plotSine(this.height, this.width, this.step);
    this.step += 4;
  }
}