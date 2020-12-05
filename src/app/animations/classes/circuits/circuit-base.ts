import { Point } from 'pixi.js';
import { CustomSpriteClass } from '../custom-sprite-class';
import { BoardConnector } from './board-connector';
import { CircuitComponent } from './circuit-component';

export class CircuitBase extends CustomSpriteClass {
  private topConnector : BoardConnector;
  private leftConnector : BoardConnector;
  private bottomConnector : BoardConnector;
  private rightConnector : BoardConnector;

  constructor() {
    super('assets/circuit-base.png', 0, 0);
    
    this.setupTopConnector();
    this.setupLeftConnector();
    this.setupBottomConnector();
    this.setupRightConnector();

    this.addChild(this.topConnector);
    this.addChild(this.leftConnector);
    this.addChild(this.bottomConnector);
    this.addChild(this.rightConnector);
    
    this.on('component-removed', (component) => {
      this.parent.emit('component-removed', component);
    })
  }

  setIfComponentOnConnector(component : CircuitComponent) : void {
    if (this.topConnector.canConnect(component)) {
      console.log("CAN CONNECT");
      this.setComponent(this.topConnector, component);
    } else if (this.leftConnector.canConnect(component)) {
      this.setComponent(this.leftConnector, component);
    } else if (this.bottomConnector.canConnect(component)) {
      this.setComponent(this.bottomConnector, component);
    } else if (this.rightConnector.canConnect(component)) {
      this.setComponent(this.rightConnector, component);
    }
  }

  private setComponent(connector : BoardConnector, component : CircuitComponent) : void {
    component.setDragging(false);
    component.setParent(connector);
    component.setOnBoard(connector.TAG, connector.midPoint);
  }


  private setupTopConnector() {
    let midPoint = new Point(198, 48);
    let leftPoint = new Point(187, 48);
    let rightPoint = new Point(206, 48);
    this.topConnector = new BoardConnector('top', midPoint, leftPoint, rightPoint);
  }

  private setupLeftConnector() {
    let midPoint = new Point(52, 221);
    let leftPoint = new Point(52, 316);
    let rightPoint = new Point(52, 120);
    this.leftConnector = new BoardConnector('left', midPoint, leftPoint, rightPoint);
  }

  private setupBottomConnector() {
    let midPoint = new Point(295, 418);
    let leftPoint = new Point(194, 418);
    let rightPoint = new Point(403, 418);
    this.bottomConnector = new BoardConnector('bot', midPoint, leftPoint, rightPoint);
  }

  private setupRightConnector() {
    let midPoint = new Point(530, 229);
    let leftPoint = new Point(530, 124);
    let rightPoint = new Point(530, 314);
    this.rightConnector = new BoardConnector('right', midPoint, leftPoint, rightPoint);
  }
}