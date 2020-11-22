import { CustomSpriteClass } from './custom-sprite-class';

export class EnergyObject extends CustomSpriteClass {
  private dragging = false;
  private data : any;
  constructor(INITIAL_X = 0, INITIAL_Y = 10) {
    super('assets/ball.png', INITIAL_X, INITIAL_Y)
    this.interactive = true;
    this.buttonMode = true;

    this
        .on('pointerdown', this.onDragStart)
        .on('pointerup', this.onDragEnd)
        .on('pointerupoutside', this.onDragEnd)
        .on('pointermove', this.onDragMove);
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

  // TODO : SUSTITUIR COORDENADAS HARDCODEADAS POR INITIAL_Y y TOP_Y
  private onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      if (newPosition.y > 10 && newPosition.y < 380) {
        this.y = newPosition.y;
      }
    }
  }

}