import { CustomSpriteClass } from '../custom-sprite-class';

export class Button extends CustomSpriteClass {
  
  constructor(x : number, y : number, onClickFunction : Function) {
    super('./assets/flecha.png', x, y);
    this.interactive = true;
    this.buttonMode = true;
    
    this.on('pointerdown', onClickFunction);
  }
}