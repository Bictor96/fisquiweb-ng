import {BaseAnimation} from './base-animation';
import { TilingSprite, Sprite, Graphics } from 'pixi.js';
import { PixiUtils } from '../utils/pixi-utils';

export class DynamicAnimation extends BaseAnimation {
    private ticker : PIXI.Ticker;
    private line : TilingSprite;
    private arrow : Graphics;
    private ball : Sprite;

    constructor() {
        super();
    }

    setup() : void {
        this.setupLine();
        this.setupBall();
        this.setupArrow();
    }

    animate() : void {
        if (this.ticker == null) {
            this.createTicker();
            if (!this.getApp().ticker.started) {
                this.start();
            }
        } else {
            this.start();
        }
    }

    reset() : void {
        this.ball.x = 0;
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
        let position = { x: 0, y: this.getApp().screen.height / 2 };
        this.ball = PixiUtils.setupSprite(this.getApp(), 'assets/ball.png', position)
    }

    private setupArrow() : void { 
        let line = new Graphics();
        line.position.set(0, this.getApp().screen.height / 2);
        line.lineStyle(4, 0xff0000);
        this.getApp().stage.addChild(line);
        this.arrow = line;
    }

    private createTicker() : void {
        this.ticker = this.getApp().ticker.add((delta) => {
            this.ball.x += 1;
        });
    }
}