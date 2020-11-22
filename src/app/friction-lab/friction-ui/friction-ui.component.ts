import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { FrictionData } from 'src/app/classes/friction-data';
import {FRICTION_VALUES} from '../../classes/friction-values'

@Component({
  selector: 'friction-ui',
  templateUrl: './friction-ui.component.html',
  styleUrls: ['./friction-ui.component.css']
})
export class FrictionUiComponent implements OnInit {
  @Input() frictionData : FrictionData;
  massForm : FormGroup;
  frictionSelect : string;

  @Output() initEvent = new EventEmitter();
  @Output() stopEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.massForm = new FormGroup({mass : new FormControl(0.3)});
    this.frictionSelect = "friction-0";
  }

  onInitClick() : void {
    console.log("FrictionSelect: " + this.frictionSelect);
    this.frictionData.frictionCoeficient = FRICTION_VALUES[this.frictionSelect];
    console.log("FrictionCof: " + this.frictionData.frictionCoeficient);
    this.frictionData.mass = this.massForm.value.mass;
    this.initEvent.emit();
  }

  onFrictionButtonChanged(value : string) {
    this.frictionSelect = value;  
    console.log("Vales: " + JSON.stringify(FRICTION_VALUES[this.frictionSelect]));
  }
}
