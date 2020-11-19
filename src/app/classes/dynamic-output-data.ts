import { DynamicInputData } from './dynamic-input-data';

export class DynamicOutputData {
  time : number;
  position : number;
  velocity : number;
  acceleration : number;
  force : number;

  constructor(time: number, inputData : DynamicInputData) {
    this.time = time / 1000;
    this.force = Number(inputData.positiveForce - inputData.negativeForce)
    this.acceleration =  this.force / inputData.mass;
    this.velocity = inputData.initialVelocity + Number(this.acceleration * this.time);
    this.position = inputData.position + Number(inputData.initialVelocity * this.time) + Number(1/2 * this.acceleration * Math.pow(this.time, 2));
  }
}