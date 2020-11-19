import {BaseAnimation} from './base-animation';
import { TilingSprite, Sprite, Graphics } from 'pixi.js';
import { PixiUtils } from '../utils/pixi-utils';

export class DynamicAnimation extends BaseAnimation {
    private line : TilingSprite;
    private positiveForceLine : Graphics;
    private negativeForceLine : Graphics;
    private ball : Sprite;
    private velocity : number = 0;

    constructor() {
        super();
    }

    setup() : void {
        this.setupLine();
        this.setupBall();
        this.setupPositiveForceLine();
        this.setupNegativeForceLine();
    }

    animate() : void {
        if (this.hasTicker()) {
            this.start();
        } else {
            this.createTicker();
            if (!this.getApp().ticker.started) {
                this.start();
            }
        }
    }

    setVelocity(velocity : number) : void {
        this.velocity = velocity / 10;
    } 

    updatePositiveForceLine(force : number) {
        console.log("Positive Next Length: " + force * 10);

        this.positiveForceLine.clear();
        this.positiveForceLine.lineStyle(6, 0x00FFFF);
        this.positiveForceLine.lineTo(force * 10, 0);
    }

    updateNegativeForceLine(force : number) {
        console.log("Negative Next Length: " + -(force * 10));

        this.negativeForceLine.clear();
        this.negativeForceLine.lineStyle(6, 0xff0000);
        this.negativeForceLine.lineTo(-(force * 10), 0);
    }

    reset() : void {
        this.ball.x = 100;
        setTimeout(() => {
            this.stop();
        });
    }

    private setupLine() {
        let scale = { width: this.getApp().screen.width * 2, height: 32 };
        let position = { x: 0, y: this.getApp().screen.height / 2 };
        this.line = PixiUtils.setupTillingSprite(this.getApp(), 'assets/line.png', scale, position);
    }

    private setupBall() : void {
        let position = { x: 100, y: this.getApp().screen.height / 2 };
        this.ball = PixiUtils.setupSprite(this.getApp(), 'assets/ball.png', position)
    }

    private setupPositiveForceLine() : void { 
        this.positiveForceLine = this.setupForceLine(0xff0000);
        this.ball.addChild(this.positiveForceLine);
    }

    
    private setupNegativeForceLine() : void { 
        this.negativeForceLine = this.setupForceLine(0xff0000);
        this.ball.addChild(this.negativeForceLine);
    }

    private setupForceLine(color : number) : Graphics {
        let line = new Graphics();
        line.lineStyle(6, color);
        return line;
    }


    private createTicker() : void {
        this.setTicker(this.getApp().ticker.add((delta) => {
            if (this.isBallCollidingWithScreen()) {
                this.moveLine(this.velocity, delta);
            } else {
                this.moveBall(this.velocity, delta);
            }
        }));
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