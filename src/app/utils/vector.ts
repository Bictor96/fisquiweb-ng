export class Vector {
  x : number;
  y : number;

  constructor(x : number, y : number) {
    this.x = x;
    this.y = y;
  }

  dotProduct(vector : Vector) : number {
    return this.x * vector.x + this.y * vector.y;
  }

  toString() : string {
    return "{ " + this.x + ", " + this.y + "}";
  }
}