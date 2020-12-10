import {BaseAnimation} from './base-animation';
import { TilingSprite, Sprite, Graphics, Point } from 'pixi.js';
import { PixiUtils } from '../utils/pixi-utils';
import { CustomSpriteClass } from './classes/custom-sprite-class';

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
        this.setupMidpoint();
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
        this.positiveForceLine.lineStyle(18, 0xdf7126);
        this.negativeForceLine.moveTo(20, 0);
        this.positiveForceLine.lineTo(force * 20, 0);
    }

    updateNegativeForceLine(force : number) {
        console.log("Negative Next Length: " + -(force * 10));

        this.negativeForceLine.clear();
        this.negativeForceLine.lineStyle(18, 0xdf7126);
        this.negativeForceLine.moveTo(-20, 0);
        this.negativeForceLine.lineTo(-(force * 20), 0);
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
        this.ball = PixiUtils.setupSprite(this.getApp(), 'assets/kinematic_ball.png', position);
        this.ball.width = 60;
        this.ball.height = 60;

    }

    private setupMidpoint() {
        let midPoint = new CustomSpriteClass("assets/ball.png", 0,0);
        this.ball.addChild(midPoint);
        midPoint.position = new Point(-30, -30);
    }

    private setupPositiveForceLine() : void { 
        this.positiveForceLine = this.setupForceLine(0x3f3f74);
        this.positiveForceLine.moveTo(20, 0);
        this.ball.addChild(this.positiveForceLine);
    }

    
    private setupNegativeForceLine() : void { 
        this.negativeForceLine = this.setupForceLine(0x3f3f74);
        this.negativeForceLine.clear();
        this.negativeForceLine.moveTo(-20, 0);
        this.ball.addChild(this.negativeForceLine);
    }

    private setupForceLine(color : number) : Graphics {
        let line = new Graphics();
        line.lineStyle(24, color);
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