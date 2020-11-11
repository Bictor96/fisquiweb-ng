import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import * as PIXI from 'pixi.js'
import { PixiUtils } from '../utils/pixi-utils';
import {LabAnimation} from '../interfaces/lab-animation';


export class KinematicAnimation {
  private app: PIXI.Application;

  private ball : PIXI.Sprite;
  private line: PIXI.TilingSprite;

  public velocity : number;
  private ticker;

  constructor() { 
    this.velocity = 1;
  }

  setApp (app : PIXI.Application) : void {
    this.app = app;
  }

  init() {
    console.log("Initing Animation");
    this.setupLine();
    this.setupBall();
  }

  setupBall() : void {
    let position = { x: 0, y: this.app.screen.height / 2 };
    this.ball = PixiUtils.setupSprite(this.app, 'assets/ball.png', position)
  }

  setupLine() : void {
    let scale = { width: this.app.screen.width * 2, height: 32 };
    let position = { x: 0, y: this.app.screen.height / 2 };
    this.line = PixiUtils.setupTillingSprite(this.app, 'assets/line.png', scale, position);
  }

  setVelocity(velocity : number) {
    this.velocity = velocity/10;
  }

  animate(): void {
    console.warn(this.app.ticker.started)
    if (this.ticker == null) {
      this.createTicker();
      if (!this.app.ticker.started) 
        this.app.ticker.start();
    } else {
      this.app.ticker.start();
    }
  }

  stop() : void {
    this.app.ticker.stop();
  }

  reset() : void {
    this.ball.x = 0;

    setTimeout(() => {
      this.stop();
      console.warn("Reseting animation");
    }, 50);
  }

  private createTicker() : void {
    this.ticker = this.app.ticker.add((delta) => {
      if (this.isBallCollidingWithScreen()) {
        this.moveLine(this.velocity, delta);
      } else {
        this.moveBall(this.velocity, delta);
      }
    }, this);
  }



  private moveLine(velocity: number, delta: number) {
    this.line.tilePosition.x -= velocity * delta;
  }

  private moveBall(velocity: number, delta: number) {
    this.ball.x += velocity * delta;
  }

  private isBallCollidingWithScreen() : Boolean {
    return this.ball.x > this.app.screen.width - 30;
  }
}