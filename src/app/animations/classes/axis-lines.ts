import { Vector } from 'src/app/utils/vector';
import { RefractionAnimation } from '../refraction-animation';
import { Line } from './line';
import { RefractionContainer } from './refraction-container';

export class AxisLines {
  normalLine : Line;
  horizonLine : Line;

  constructor(container : RefractionContainer) {
    this.horizonLine = container.addLine(new Vector(0, container.height/2), 0xADD8E6);
    this.horizonLine.draw(container.width, 0);

    this.normalLine = container.addLine( new Vector(container.width/2, 0), 0xFFFF00);
    this.normalLine.draw(0, container.height - 20);
  }
}