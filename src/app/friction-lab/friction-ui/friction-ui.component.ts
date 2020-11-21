import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { FrictionData } from 'src/app/classes/friction-data';

@Component({
  selector: 'friction-ui',
  templateUrl: './friction-ui.component.html',
  styleUrls: ['./friction-ui.component.css']
})
export class FrictionUiComponent implements OnInit {
  @Input() frictionData : FrictionData;
  massForm : FormGroup;

  @Output() initEvent = new EventEmitter();
  @Output() stopEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.massForm = new FormGroup({mass : new FormControl(0.3)});
  }

  onInitClick() : void {
    this.frictionData.mass = this.massForm.value.mass;
    this.initEvent.emit();
  }
}
