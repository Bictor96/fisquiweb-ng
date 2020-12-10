import { EnergyData } from 'src/app/classes/energy-data';
import { EnergyAnimation } from '../energy-animation';
import { EnergyLine } from './energy-line';

export class EnergyLines {
  private energyData : EnergyData;
  private potentialLine : EnergyLine;
  private kineticLine : EnergyLine;
  private heatLine : EnergyLine;

  private INITIAL_Y :number
  private TEXT_Y : number;

  constructor(animation : EnergyAnimation) {
    this.energyData = animation.getEnergyData();
    this.INITIAL_Y = animation.getInitialPoint();

    this.potentialLine = new EnergyLine("Potencial", 40, this.INITIAL_Y, -30, 0x3a54da);
    this.kineticLine = new EnergyLine("Cinetica", 160, this.INITIAL_Y, -30, 0x7a8ae7);
    this.heatLine = new EnergyLine("Calor", 280, this.INITIAL_Y, -17, 0xa2acee);

    this.addToStage(animation);
  }

  addToStage(animation : EnergyAnimation) : void {
    animation.addToStage(this.potentialLine);
    animation.addToStage(this.kineticLine);
    animation.addToStage(this.heatLine);
  }

  updatePotentialLine() : void {
    this.potentialLine.draw(0, -(this.energyData.getPotentialEnergy() * 1.5));
  }

  updateLines() : void {
    this.potentialLine.draw(0, -(this.energyData.getPotentialEnergy() * 1.5));
    this.kineticLine.draw(0, -(this.energyData.getKinematicEnergy() * 1.5));
    this.heatLine.draw(0, (this.energyData.getHeat() * 1.5));
  }
  
  reset() : void {
    this.potentialLine.draw(0, 0);
    this.kineticLine.draw(0, 0);
    this.heatLine.draw(0, 0);
  }
}