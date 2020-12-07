import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { InteractionData, InteractionEvent, Point, Text } from 'pixi.js';
import { CalibreLeg } from './calibre-leg';
import { CustomSpriteClass } from './custom-sprite-class';

export class Calibre extends CustomSpriteClass{
  private static_leg : CalibreLeg;
  private movable_leg : CalibreLeg;
  private sizeText : Text;

  private dragging = false;
  private data : InteractionData;

  constructor() {
    super('assets/calibre_cuerpo.png', 100, 100);
    this.static_leg = new CalibreLeg('assets/calibre_pata_estatica.png',20, 5, false);
    this.movable_leg = new CalibreLeg('assets/calibre_pata_movil.png', 80, 5, true);
    this.sizeText = new Text((this.movable_leg.x / 10).toFixed(2), {
      fontFamily : 'Arial',
      fontSize: 18,
      fill: 0xFFFFFF,
      align: 'center'
    });;

    this.sizeText.x = 280;
    this.sizeText.y = 15;

    
    this.addChild(this.static_leg);
    this.addChild(this.movable_leg);
    this.addChild(this.sizeText);

    console.log("Setting Draggable")
    
    this.interactive = true;
    this.buttonMode = true;
    this
    .on('pointerdown', this.onDragStart)
    .on('pointerup', this.onDragEnd)
    .on('pointerupoutside', this.onDragEnd)
    .on('pointermove', this.onDragMove);

    this.on('leg_updated', this.onLegUpdated);
  }

  private onLegUpdated(text : string) : void {
    console.log(text);
    this.sizeText.text = text;
  }

  private onDragStart(event : InteractionEvent) : void {
    if (!this.isOnDraggableLegPosition(event.data)) {
      this.dragging = true;
      this.data = event.data;
      this.alpha = 0.5
    }
  } 

  private onDragEnd() {
    this.dragging = false
    this.data = null;
    this.alpha = 1;
  }

  private onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      if (newPosition.x <  450 &&  (newPosition.y > -4 && newPosition.y <= 426))
        this.position = newPosition;
    }
  }

  // Comprueba si el click es en la zona en la que esta la pata que se puede mover
  // Sin esta funcion no se puede seleccionar esa pata.
  private isOnDraggableLegPosition(data : any) : boolean {
    const clickPosition = data.getLocalPosition(this.parent);
    if (this.movable_leg.containsPoint(new Point(clickPosition.x, clickPosition.y)))
      return true;
    else 
      return false;
  }

}