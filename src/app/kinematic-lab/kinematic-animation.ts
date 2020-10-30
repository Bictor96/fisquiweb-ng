import * as PIXI from 'pixi.js'
import { PixiUtils } from '../utils/pixi-utils';

export class KinematicAnimation {
  private app: PIXI.Application;

  private ball : PIXI.Sprite;
  private line: PIXI.TilingSprite;

  public velocity : number;

  constructor(app: PIXI.Application) { 
    this.app = app;
    this.velocity = 1;
  }

  init() {
    console.log("Initing Animation");
    this.setupLine();
    this.setupBall();

    this.animate();
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

  animate(): void {
    this.app.ticker.add((delta) => {
      if (this.isBallCollidingWithScreen()) {
        this.moveLine(this.velocity, delta);
      } else {
        this.moveBall(this.velocity, delta);
      }
    });
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