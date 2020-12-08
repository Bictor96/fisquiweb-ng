import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wave-tools',
  templateUrl: './wave-tools.component.html',
  styleUrls: ['./wave-tools.component.scss']
})

export class WaveToolsComponent {
  time : number;
  private stop = false;
  private running = false;
  private timeStep = 10;

  constructor() { 
    this.time = 0;
  }

  onInitClick() : void {
    if(!this.running) {
      this.running = true;
      this.stop = false;
      this.timeInterval();
    }
  }

  onStopClick() : void {
    this.running = false;
    this.stop = true;
  }

  onResetClick() : void {
    this.onStopClick();

    // SIN ESTE TIMEOUT, EL TIEMPO PUEDE QUEDAR EN 0,1
    setTimeout(() => {
      this.time = 0;
    }, 10);
  }


  private timeInterval() {
    let interval = setInterval(() => {
      if (this.stop) {
        console.log("Stopping time interval");
        clearInterval(interval);
        this.stop = false;
      }

      this.time += this.timeStep;
    }, this.timeStep);
  }
}
