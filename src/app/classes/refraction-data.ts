export class RefractionData {
  private n1 : number; // Indice de refraccion del primer medio
  private n2 : number; // Indice de refraccion del segundo medio
  private i : number; // Angulo incidencia
  private r : number; // Angulo refraccion
  
  constructor(n1 = 1.0, n2 = 1.5) {
    this.n1 = n1;
    this.n2 = n2;
    this.i = 0;
    this.r = 0;
  }

  setRefractionAngleFromIncidence() {
    // Calculo del seno de r
    this.r = this.n1 * Math.sin(this.i) / this.n2;
    console.log("Incidence: " + (this.i*180.0) / Math.PI);
    console.log("New refraction: " + this.r);
    console.log("N1: " + this.n1);
    console.log("N2: " + this.n2);
  }

  generate() : void {
    
  }

  setIncidenceAngle( angle : number ) { this.i = angle; }
  setRefractionAngle( angle : number ) { this.r = angle; }
  setN1(n1 : number ) {this.n1 = n1;}
  setN2(n2 : number ) {this.n2 = n2;}

  getN1() { return this.n1; }
  getN2() { return this.n2; }
  getIncidenceAngle() { return this.i; }
  getRefractionAngle() { return this.r; }
}