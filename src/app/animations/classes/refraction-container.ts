import { RefractionData } from 'src/app/classes/refraction-data';
import { Vector } from 'src/app/utils/vector';
import { AnimationContainer } from './animation-container';
import { Line } from './line';

export class RefractionContainer extends AnimationContainer {
  private refractionData : RefractionData;
  private normalLine : Line;
  private horizonLine : Line;

  private beam : Line;

  constructor() {
     super(370, 350, 0x303030);
      
     this.horizonLine = this.addLine(new Vector(0, this.height/2), 0xADD8E6);
     this.horizonLine.draw(this.width, 0);

     this.normalLine = this.addLine( new Vector(this.width/2, 0), 0xFFFF00);
     this.normalLine.draw(0, this.height - 20);

     this.refractionData = new RefractionData();
   }

   generateBeam() : void {
     this.removeChild(this.beam);

     let displacement = this.randomDisplacement();
     this.beam = this.addLine(new Vector(displacement.x, displacement.y), 0xFFFFFF);
     this.beam.draw(this.width/2 - displacement.x, this.height/2 - displacement.y);
     console.log("Beam Angle: " + this.getAngle());

     this.refractionData.setIncidenceAngle(this.getAngle());
     this.refractionData.setRefractionAngleFromIncidence();
   }

   private getAngle() : number {
      let midVector = new Vector(this.width/2, this.height / 2);
      let beamVector = new Vector(midVector.x - this.beam.x, midVector.y - this.beam.y);
      let normalVector = new Vector(midVector.x - this.normalLine.x, midVector.y - this.normalLine.y);

      let dotProduct = (beamVector.x * normalVector.x) + (beamVector.y * normalVector.y);
      let beamMagnitude = Math.sqrt(Math.pow(beamVector.x, 2) + Math.pow(beamVector.y, 2));
      let normalMagnitude = Math.sqrt(Math.pow(normalVector.x, 2) + Math.pow(normalVector.y, 2));

      // Coseno del angulo
      //return (dotProduct) / (beamMagnitude * normalMagnitude)
      return Math.acos((dotProduct) / (beamMagnitude * normalMagnitude)) * (180/Math.PI);
   }

   private randomDisplacement() : Vector {
     let xDisplacement = 20;
     let yDisplacement = 20;
     if (Math.round(Math.random()) == 0 ) {
        xDisplacement = Math.random() * this.width / 2;
     } else {
        yDisplacement = Math.random() * this.height / 2;
     }

     return new Vector(xDisplacement, yDisplacement);
   }
}