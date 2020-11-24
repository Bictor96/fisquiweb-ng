import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnergyData } from 'src/app/classes/energy-data';

@Component({
  selector: 'energy-input',
  templateUrl: './energy-input.component.html',
  styleUrls: ['./energy-input.component.css']
})
export class EnergyInputComponent implements OnInit {
  @Input("data") energyData : EnergyData;
  energyForm : FormGroup;
  
  constructor() {}

  ngOnInit(): void {
    this.energyForm = new FormGroup({
      friction : new FormControl(this.energyData.friction),
      mass : new FormControl(this.energyData.mass),
      initialVelocity : new FormControl(this.energyData.initialVelocity)
    });
  }

  onInitClick() : void {
    console.log("Position: " + this.energyData.position);
    this.energyData.position = 100;
  }

}
