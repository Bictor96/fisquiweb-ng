import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import * as PIXI from 'pixi.js'
import { PixiUtils } from '../utils/pixi-utils';
import {LabAnimation} from '../interfaces/lab-animation';
import { BaseAnimation } from './base-animation';


export class KinematicAnimation extends BaseAnimation {
  private ticker : PIXI.Ticker;
  private ball : PIXI.Sprite;
  private line: PIXI.TilingSprite;
  public velocity : number;

  constructor() { 
    super();
    this.velocity = 1;
  }

  setup() {
    console.log("Initing Animation");
    this.setupLine();
    this.setupBall();
  }

   private setupBall() : void {
    let position = { x: 0, y: this.getApp().screen.height / 2 };
    this.ball = PixiUtils.setupSprite(this.getApp(), 'assets/ball.png', position)
  }

  private setupLine() : void {
    let scale = { width: this.getApp().screen.width * 2, height: 32 };
    let position = { x: 0, y: this.getApp().screen.height / 2 };
    this.line = PixiUtils.setupTillingSprite(this.getApp(), 'assets/line.png', scale, position);
  }

  setVelocity(velocity : number) {
    this.velocity = velocity/10;
  }

  animate(): void {
    let app = this.getApp()
    console.warn(app.ticker.started)
    if (this.ticker == null) {
      this.createTicker();
      if (!app.ticker.started) 
        this.start()
    } else {
        this.start();
    }
  }

  reset() : void {
    this.ball.x = 0;

    setTimeout(() => {
      this.stop();
      console.warn("Reseting animation");
    }, 50);
  }

  private createTicker() : void {
    this.ticker = this.getApp().ticker.add((delta) => {
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
    return this.ball.x > this.getApp().screen.width - 30;
  }
}