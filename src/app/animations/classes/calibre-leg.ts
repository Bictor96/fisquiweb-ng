import { EventEmitter } from '@angular/core';
import { CustomSpriteClass } from './custom-sprite-class';

export class CalibreLeg extends CustomSpriteClass {
  private data : any;
  
  private dragging = false;
  private leftStop = 40;
  private rightStop = 224;

  constructor(asset : string, x : number, y : number, draggable : boolean) {
    super(asset, x, y);
    if (draggable) {
      this.interactive = true;
      this.buttonMode = true;
      this
      .on('pointerdown', this.onDragStart)
      .on('pointerup', this.onDragEnd)
      .on('pointerupoutside', this.onDragEnd)
      .on('pointermove', this.onDragMove);
    }
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
      const newX = this.data.getLocalPosition(this.parent).x;
      if (newX >= this.leftStop && newX <= this.rightStop) {
        this.x = newX;
        this.parent.emit('leg_updated', this.makePositionText());
      } else if (newX < this.leftStop) {
        this.x = this.leftStop;
      } else if (newX > this.rightStop) {
        this.x = this.rightStop;
      }
    }
  }

  private makePositionText() : string {
    return ((this.x - this.leftStop) / 100).toFixed(2);
  }

}