import { BatchGeometry, Container, Sprite, Texture } from 'pixi.js';
import { Vector } from '../utils/vector';
import { BaseAnimation } from './base-animation';
import { AnimationContainer } from './classes/animation-container';
import { RefractionContainer } from './classes/refraction-container';

export class RefractionAnimation extends BaseAnimation {
  private container : RefractionContainer;

  setup() : void {
    this.container = new RefractionContainer();
    this.getApp().stage.addChild(this.container);
    this.container.moveContainer(30, 30);
  }
  
  animate() : void {
    this.generateBeam();
  }

  generateBeam() : void {
    this.container.generateBeam();
  }
}