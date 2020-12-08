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
  styleUrls: ['./energy-output.component.scss']
})

export class EnergyOutputComponent implements OnInit {
  @Input("data") energyData : EnergyData;

  constructor() {}

  ngOnInit(): void {
    /**
     *  Por algun motivo, sin este intervalo no actualiza 
     *  la UI al actualizar los datos.
     * */ 
    setInterval(() => {
    }, 1000);
  }
}
