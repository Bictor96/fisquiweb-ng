export class KinematicData {
  velocity: number;
  acceleration: number;
  position: number;

  constructor(velocity : number, acceleration : number, position : number) {
    this. velocity = velocity;
    this.acceleration = acceleration;
    this.position = position
  }

  getKinematicDataInTime(timeInSeconds: number) : KinematicData {
    return new KinematicData(this.GetVelocityInTime(timeInSeconds), this.acceleration, this.GetPositionInTime(timeInSeconds));
  }

  private GetVelocityInTime(time: number) : number {
    return Number(this.velocity) + Number(this.acceleration * time);
  }

  private GetPositionInTime(time: number) : number {
    return Number(this.position) + Number(this.velocity*time) + Number(1/2*this.acceleration*Math.pow(time, 2));
  }
}
