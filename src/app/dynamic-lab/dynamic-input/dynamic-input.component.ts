import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DynamicInputData} from '../../classes/dynamic-input-data';
import { Subject } from 'rxjs';

@Component({
  selector: 'dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})

export class DynamicInputComponent {
  running : boolean= false;

  dynamicForm : FormGroup = new FormGroup({
    mass: new FormControl(1),
    position: new FormControl(0),
    positiveForce: new FormControl(0),
    negativeForce: new FormControl(0),
    initialVelocity: new FormControl(0),
  });

  @Output() initEvent = new EventEmitter<DynamicInputData>();
  @Output() stopEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();
  @Output() updateForceEvent = new EventEmitter();

  stateChanges = new Subject<void>();

  @Input()
  get value(): DynamicInputData | null {
    console.log("Force value " + this.dynamicForm.value.positiveForce);
    this.onPositiveForceChange();
    this.onNegativeForceChange();
    this.stateChanges.next();
    return null;
  }

  
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
  
  onPositiveForceChange() : void {
    console.log("Positive Force change")
    this.updateForceEvent.emit({sign : "positive", value : this.dynamicForm.value.positiveForce });
  }

  onNegativeForceChange() : void {
    this.updateForceEvent.emit({sign : "negative", value : this.dynamicForm.value.negativeForce });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}
