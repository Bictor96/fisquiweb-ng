import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EnergyData } from 'src/app/classes/energy-data';
import { CustomSpriteClass } from './custom-sprite-class';

export class EnergyObject extends CustomSpriteClass {
  private dragging = false;
  private data : any;
  private energyData: EnergyData;

  private INITIAL_Y : number;
  private TOP_Y : number;

  constructor(energyData : EnergyData, INITIAL_X, INITIAL_Y, TOP_Y) {
    super('assets/ball.png', INITIAL_X, INITIAL_Y)
    this.interactive = true;
    this.buttonMode = true;

    this.energyData = energyData;
    this.INITIAL_Y = INITIAL_Y;
    this.TOP_Y = TOP_Y;

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

  private onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      if (newPosition.y > this.TOP_Y && newPosition.y < this.INITIAL_Y) {
        this.y = newPosition.y;
      } else if (newPosition.y < this.TOP_Y) {
        console.log("SETTED TO " + this.TOP_Y)
        this.y = this.TOP_Y
      } else if( newPosition.y > this.INITIAL_Y) {
        console.log("SETTED TO " + this.INITIAL_Y)
        this.y = this.INITIAL_Y
      }

      this.energyData.setPosition((this.INITIAL_Y - this.y) / 10);
      this.energyData.setTotalEnergyToPotential();
      this.energyData.setMaximumPositionToActual();
    }
  }

}