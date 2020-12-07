import { Container, Point, Text } from 'pixi.js';
import { Button } from './button';
import { ComponentText } from './component-text';
import { ParallelResistance } from './parallel_resistance';

export class ParallelResistanceComponent extends Container {
  private label : ComponentText;
  private resistanceValue : number;
  private upButton : Button;
  private downButton : Button;
  parentResistance : ParallelResistance;

  constructor(parent : ParallelResistance, labelPos : Point, up : Point, down : Point) {
    super();
    this.parentResistance = parent;
    this.label = new ComponentText("100");
    this.label.position = labelPos;
    this.resistanceValue = 100;
    this.addChild(this.label);

    this.upButton = new Button(up.x, up.y, (event) => {
      if (this.resistanceValue < 100) {
        this.updateResistance(10);
        this.parent.emit('resistance-updated', 10);
      }
    });

    this.downButton = new Button(down.x, down.y, (event) => {
      if (this.resistanceValue > 0) {
        this.updateResistance(-10);
        this.parent.emit('resistance-updated', -10);
      }
    });

    this.downButton.angle = 180;

    this.addChild(this.upButton);
    this.addChild(this.downButton);
  }

  getResistance() : number { return this.resistanceValue; }

  private updateResistance(value : number ) {
    this.resistanceValue += value;
    console.log(this.label)
    this.label.text = this.resistanceValue.toFixed(0);
  } 
}