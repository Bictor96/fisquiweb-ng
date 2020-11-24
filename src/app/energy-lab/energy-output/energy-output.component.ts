import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { EnergyData } from 'src/app/classes/energy-data';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text : string;
  value : string;
}

@Component({
  selector: 'energy-output',
  templateUrl: './energy-output.component.html',
  styleUrls: ['./energy-output.component.css']
})

export class EnergyOutputComponent implements OnInit {
  @Input("data") energyData : EnergyData;
  tiles : Tile[];

  constructor() {}

  ngOnInit(): void {
    this.tiles = [
      {text: 'Potencial: ', value : String(this.energyData.getPotentialEnergy()), cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Cinetica: ', value : String(this.energyData.getKinematicEnergy()), cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Calor: ', value : String(this.energyData.getHeat()), cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Total: ', value : String(this.energyData.getTotalEnergy()), cols: 3, rows: 1, color: '#DDBDF1'},
      {text: 'Altura: ', value : String(this.energyData.position), cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Altura Maxima: ', value : String(this.energyData.position), cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Velocidad: ', value : String(this.energyData.getVelocity()), cols: 1, rows: 1, color: '#DDBDF1'},
    ];

    setInterval(() => {
    }, 1000);


  }
}
