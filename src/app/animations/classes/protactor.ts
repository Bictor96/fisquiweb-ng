import { CustomSpriteClass } from './custom-sprite-class';

export class Protactor extends CustomSpriteClass {
  private dragging = false;
  private data : any;

  constructor() {
    super('assets/protractor.png', 500, 200);
    this.anchor.set(0.5, 0.5);
    this.interactive = true;
    this.buttonMode = true;

    this
    .on('pointerdown', this.onDragStart)
    .on('pointerup', this.onDragEnd)
    .on('pointerupoutside', this.onDragEnd)
    .on('pointermove', this.onDragMove);
  }

  toggle() {
    this.visible = !this.visible;
  }

  rotateLeft() : void {
    this.angle -= 90
  }

  rotateRight() : void {
    this.angle += 90
  }

  private onDragStart(event) : void {
    this.dragging = true;
    this.data = event.data;
    this.alpha = 0.5
  } 

  private onDragEnd() {
    this.dragging = false
    this.data = null;
    this.alpha = 1;
  }

  private onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      if (newPosition.x <  600 &&  (newPosition.y > -4 && newPosition.y <= 426))
        this.position = newPosition;
    }
  }

  
}