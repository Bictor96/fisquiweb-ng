import { CustomSpriteClass } from './custom-sprite-class';

export class DraggableSprite extends CustomSpriteClass {
  private data : any;
  private dragging = false;

  constructor(asset : string, x : number, y : number) {
    super(asset, 0, 0);
    this.interactive = true;
    this.buttonMode = true;
    this.anchor.set(0.5, 0.5);
    this.x = x;
    this.y = y;
  
    this
    .on('pointerup', this.onDragEnd)
    .on('pointerupoutside', this.onDragEnd)
    .on('pointermove', this.onDragMove);
  }

  setDragging(dragging : boolean) : void {this.dragging = dragging;}
  setData(data : any) : void {this.data = data;}

  private onDragEnd() {
    this.dragging = false
    this.data = null;
    this.alpha = 1;
  }

  private onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
      this.parent.emit('moving', this);
    }
  }
}