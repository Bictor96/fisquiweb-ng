import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WAVE_VALUES } from 'src/app/classes/wave-values';

@Component({
  selector: 'wave-input',
  templateUrl: './wave-input.component.html',
  styleUrls: ['./wave-input.component.scss']
})

export class WaveInputComponent implements OnInit {
  @Output() controlEvent = new EventEmitter();
  @Output() changeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onInitClick() : void {
    this.controlEvent.emit(true);
  }

  onStopClick() : void {
    this.controlEvent.emit(false)
  }

  onInputClick(wave : string) : void {
    console.log(wave + " clicked");
    this.changeEvent.emit(WAVE_VALUES[wave]);

  }
}
