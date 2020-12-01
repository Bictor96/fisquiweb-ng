import { ThrowStmt } from '@angular/compiler';
import { Graphics } from 'pixi.js';
import { RefractionData } from 'src/app/classes/refraction-data';
import { RefractionLabComponent } from 'src/app/refraction-lab/refraction-lab.component';
import { Vector } from 'src/app/utils/vector';
import { AnimationContainer } from './animation-container';
import { AxisLines } from './axis-lines';
import { CustomSpriteClass } from './custom-sprite-class';
import { Line } from './line';
import { RefractionLabels } from './refraction-labels';
import { RefractionLine } from './refraction-line';
import { RefractionLines } from './refraction-lines';

export class RefractionContainer extends AnimationContainer {
  private refractionData : RefractionData;
  private axisLines : AxisLines;
  private refractionLines : RefractionLines;
  private refractionLabels : RefractionLabels;

  constructor(data : RefractionData) {
      super(450, 400, 0x303030);
      this.refractionData = data;
      this.axisLines = new AxisLines(this);
      this.refractionLines = new RefractionLines(this);
      this.refractionLabels = new RefractionLabels(this);
   }

   generateBeam() : void {
      this.refractionLines.generateBeam();
      this.refractionLabels.update();
   }

   getData() : RefractionData {
      return this.refractionData;
   }

   getNormal() : Line {
      return this.axisLines.normalLine;
   }
}