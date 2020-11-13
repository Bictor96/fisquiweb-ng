import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DynamicInputData} from '../../classes/dynamic-input-data';

@Component({
  selector: 'dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})

export class DynamicInputComponent {
  running = false;

  dynamicForm = new FormGroup({
    mass: new FormControl('mass'),
    position: new FormControl('position'),
    positiveForce: new FormControl('pForce'),
    negativeForce: new FormControl('nForce'),
    initialVelocity: new FormControl('iVelocity'),
  });

  @Output() initEvent = new EventEmitter<DynamicInputData>();
  @Output() stopEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();

  onSubmitClick() : void {
    this.running = true;
    let value = this.dynamicForm.value;
    this.initEvent.emit(new DynamicInputData(
      value.mass,
      value.position,
      value.positiveForce,
      value.negativeForce,
      value.initialVelocity
    ));
  }

  onStopClick() : void {
    this.running = false;
    this.stopEvent.emit();
  }

  onResetClick() : void {
    this.running = false;
    this.resetEvent.emit();
  }
  
}
