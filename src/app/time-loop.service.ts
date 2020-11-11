import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeLoopService {

  interval : number | undefined;
  timeCounter : number;
  stepTime: number;
  maximumTime: number;

  lastCall : number;

  constructor() {
     this.timeCounter = 0;
     this.lastCall = -1;
  }

  setLoop(stepTime: number, maximumTime: number) {
    this.stepTime = stepTime;
    this.maximumTime = maximumTime;
  }

  loop(fn: Function) {
    // Necesario llamar la funcion antes del intervalo, ya que este espera el tiempo indicado antes del primer bucle tambien.
    if (this.lastCall != this.timeCounter) {
      fn(this.timeCounter); // POSIBLE PROBLEMA AL PARAR Y VOLVER A INICIAR
      this.lastCall = this.timeCounter;
    }
     
    this.interval = window.setInterval(() => {
      if (this.lastCall == this.timeCounter) {
        this.timeCounter += this.stepTime;
        fn(this.timeCounter);
        this.lastCall = this.timeCounter;
      }


      if (this.timeCounter > this.maximumTime)
        this.clear();

    }, this.stepTime);
  }

  stop() {
    window.clearInterval(this.interval);
  }

  clear() {
    window.clearInterval(this.interval);
    this.timeCounter = 0;
    this.lastCall = -1;
  }
}
