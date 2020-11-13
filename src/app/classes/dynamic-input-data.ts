export class DynamicInputData {
    mass : number;
    position : number;
    positiveForce: number;
    negativeForce: number;
    initialVelocity: number;

    constructor(
        mass : number, 
        position: number,
        positiveForce : number,
        negativeForce : number,
        initialVelocity : number) 
        {
            this.mass = mass;
            this.position = position;
            this.positiveForce = positiveForce;
            this.negativeForce = negativeForce;
            this.initialVelocity = initialVelocity;
        }
}