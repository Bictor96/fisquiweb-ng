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
    let sin = (this.n1 * Math.sin(this.i)) / this.n2;
    this.r = Math.asin(sin) * (180/Math.PI);
    console.log("New refraction: " + this.r);
  }

  setIncidenceAngle( angle : number ) { this.i = angle; }
  setRefractionAngle( angle : number ) { this.r = angle; }

  getN1() { return this.n1; }
  getN2() { return this.n2; }
  getIncidenceAngle() { return this.i; }
  getRefractionAngle() { return this.r; }
}