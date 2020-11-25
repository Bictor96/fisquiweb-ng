import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { timeStamp } from 'console';
import { EnergyData } from 'src/app/classes/energy-data';

@Component({
  selector: 'energy-input',
  templateUrl: './energy-input.component.html',
  styleUrls: ['./energy-input.component.css']
})
export class EnergyInputComponent implements OnInit {
  @Input("data") energyData : EnergyData;
  @Output() initEvent = new EventEmitter();
  energyForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.energyForm = this.formBuilder.group({
      friction : new FormControl(this.energyData.friction),
      mass : new FormControl(this.energyData.mass),
      initialVelocity : new FormControl(this.energyData.initialVelocity)
    });

    this.onChanges();
  }

  onChanges() : void {
    this.energyForm.valueChanges.subscribe(val => {
      console.log("Cambio " + JSON.stringify(val));
      this.updateEnergyData(val);
    });
  }

  private updateEnergyData(value : object) {
    this.energyData.friction = Number(value["friction"]);
    this.energyData.mass = Number(value["mass"]);
    this.energyData.initialVelocity = Number(value["initialVelocity"]);
    this.energyData.setTotalEnergyToPotential();

    console.log(this.energyData.toString());
  }

  onInitClick() : void {
    this.initEvent.emit();
  }

}
