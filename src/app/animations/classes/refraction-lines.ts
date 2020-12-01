import { RefractionData } from 'src/app/classes/refraction-data';
import { Vector } from 'src/app/utils/vector';
import { Line } from './line';
import { RefractionContainer } from './refraction-container';
import { RefractionLine } from './refraction-line';

export class RefractionLines {
  beam : RefractionLine;
  refractionBeam : RefractionLine;
  refractionData : RefractionData;
  normalLine : Line;

  private midX : number;
  private midY : number;

  constructor(container : RefractionContainer) {
    this.midX = container.width / 2
    this.midY = container.height / 2
    this.normalLine = container.getNormal();
    this.refractionData = container.getData();

    this.refractionBeam = new RefractionLine(this.refractionData, this.midX, this.midY); 
    this.beam = new RefractionLine(this.refractionData, 0, 0); 

    container.addChild(this.beam);
    container.addChild(this.refractionBeam);
  }

  generateBeam() : void {
    let displacement = this.randomDisplacement();
    this.beam.move(displacement.x, displacement.y);
    this.beam.plotTo(this.midX, this.midY);
    
    this.setIncidenceAndRefractionAngle();
    this.generateRefractionBeam();
  }

  private generateRefractionBeam() : void {
    const angle = this.refractionData.getRefractionAngle();
    this.refractionBeam.plotFrom(this.midX, this.midY, angle);
 }

  private setIncidenceAndRefractionAngle() {
    this.refractionData.setIncidenceAngle(this.getAngle());
    this.refractionData.setRefractionAngleFromIncidence();

    if ((this.refractionData.getRefractionAngle()* 180 / Math.PI) < 0) {
       console.log(" Negative Refraction: " + this.refractionData.getRefractionAngle() + ". Generating another beam");
       // Si el angulo de refraccion es negativo, generamos otro rayo.
       this.generateBeam();
    }
 }

 private getAngle() : number {
    let midVector = new Vector(this.midX, this.midY);
    let beamVector = new Vector(midVector.x - this.beam.x, midVector.y - this.beam.y);
    let normalVector = new Vector(midVector.x - this.normalLine.x, midVector.y - this.normalLine.y);

    let dotProduct = (beamVector.x * normalVector.x) + (beamVector.y * normalVector.y);
    let beamMagnitude = Math.sqrt(Math.pow(beamVector.x, 2) + Math.pow(beamVector.y, 2));
    let normalMagnitude = Math.sqrt(Math.pow(normalVector.x, 2) + Math.pow(normalVector.y, 2));

    return Math.acos((dotProduct) / (beamMagnitude * normalMagnitude));
 }

 private randomDisplacement() : Vector {
   let xDisplacement = 20;
   let yDisplacement = 20;
   if (Math.round(Math.random()) == 0 ) {
      xDisplacement = Math.random() * this.midX;
   } else {
      yDisplacement = Math.random() * this.midY;
   }

   return new Vector(xDisplacement, yDisplacement);
 }
}