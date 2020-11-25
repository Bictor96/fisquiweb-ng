import { EnergyData } from 'src/app/classes/energy-data';
import { EnergyAnimation } from '../energy-animation';
import { EnergyLine } from './energy-line';

export class EnergyLines {
  private energyData : EnergyData;
  private potentialLine : EnergyLine;
  private kineticLine : EnergyLine;
  private heatLine : EnergyLine;

  private INITIAL_Y :number

  constructor(animation : EnergyAnimation) {
    this.energyData = animation.getEnergyData();
    this.INITIAL_Y = animation.getInitialPoint();

    this.potentialLine = new EnergyLine("Potencial", 40, this.INITIAL_Y);
    this.kineticLine = new EnergyLine("Cinetica", 120, this.INITIAL_Y);
    this.heatLine = new EnergyLine("Calor", 200, this.INITIAL_Y, -17);

    this.addToStage(animation);
  }

  addToStage(animation : EnergyAnimation) : void {
    animation.addToStage(this.potentialLine);
    animation.addToStage(this.kineticLine);
    animation.addToStage(this.heatLine);
  }

  updatePotentialLine() : void {
    this.potentialLine.draw(0, -(this.energyData.getPotentialEnergy()));
  }

  updateLines() : void {
    this.potentialLine.draw(0, -(this.energyData.getPotentialEnergy()));
    this.kineticLine.draw(0, -(this.energyData.getKinematicEnergy()));
    this.heatLine.draw(0, (this.energyData.getHeat()));
  }
}