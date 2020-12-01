import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {KinematicData} from '../../classes/kinematic-data';
import { TimeLoopService } from '../../time-loop.service';

@Component({
  selector: 'kinematic-form',
  templateUrl: './kinematic-form.component.html',
  styleUrls: ['./kinematic-form.component.css']
})

export class KinematicFormComponent {
  @Output() initEvent = new EventEmitter<KinematicData>();
  @Output() stopEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();
  
  kinematicForm = new FormGroup({
    velocity: new FormControl(''),
    acceleration: new FormControl(''),
    position: new FormControl('')
  });

  running: Boolean = false;

  onSubmit() {
    this.running = true;

    let value = this.kinematicForm.value
    this.initEvent.emit(new KinematicData(value.velocity, value.acceleration, value.position))
  }

  stopClicked() {
    this.running = false;
    this.stopEvent.emit();
  }

  resetClicked() {
    this.running = false;
    this.resetEvent.emit();
  }
}

