import { BatchGeometry, Container, Sprite, Texture } from 'pixi.js';
import { RefractionData } from '../classes/refraction-data';
import { Vector } from '../utils/vector';
import { BaseAnimation } from './base-animation';
import { AnimationContainer } from './classes/animation-container';
import { CustomSpriteClass } from './classes/custom-sprite-class';
import { Protactor } from './classes/protactor';
import { RefractionContainer } from './classes/refraction-container';

export class RefractionAnimation extends BaseAnimation {
  private container : RefractionContainer;
  private data : RefractionData;
  private protactor : Protactor;

  constructor(data : RefractionData) {
    super();
    this.data = data;
    this.protactor = new Protactor();

  }

  setup() : void {
    this.container = new RefractionContainer(this.data);
    this.getApp().stage.addChild(this.container);
    this.getApp().stage.addChild(this.protactor);
    this.container.moveContainer(30, 30);
  }
  
  animate() : void {
    this.generateBeam();
  }

  generateBeam() : void {
    this.container.generateBeam();
  }

  rotateProtactorRight() {
    console.log("Rotating R");
    this.protactor.rotateRight();
  }

  rotateProtractorLeft() {
    console.log("Rotating L");
    this.protactor.rotateLeft();
  }

  toggleProtractor() : void {
    console.log("Toggling protractor");
    this.protactor.toggle();
  }
}