import { RefractionData } from 'src/app/classes/refraction-data'
import { Line } from './line';

export class RefractionLine extends Line {
  private data : RefractionData;
  private initialX : number;
  private initialY : number;
  
  constructor(data : RefractionData, x : number, y : number) {
    super(x, y, 0xFFFFFF, 2);
    this.data = data;
    this.initialX = x;
    this.initialY = y;
  }

  // X e Y son las coordenadas a las que ira la linea
  plotTo(x : number, y : number) : void{
    this.resetLine();
    console.log(this.x + " - " + this.y);
    let xDif = this.calculateCoordinateDiference(this.x, x);
    let yDif = this.calculateCoordinateDiference(this.y, y);
    this.lineTo(xDif, yDif);
  }

  // X e Y son las coordenas desde donde saldra la linea
  // Angle es el angulo que tendra respecto al eje Y
  plotFrom(x : number, y: number, angle : number) {
    this.resetLine();
    this.lineTo(150*Math.sin(angle) , 150*Math.cos(angle));
  }

  updateData(data : RefractionData) : void {
    this.data = data;
  }

  private calculateCoordinateDiference(x1 : number, x2 : number) {
    return x2 - x1;
  }

  private resetLine() {
    this.clear();
    this.lineStyle(this.strokeWitdh, this.color);
  }
}