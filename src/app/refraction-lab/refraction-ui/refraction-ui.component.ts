import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'refraction-ui',
  templateUrl: './refraction-ui.component.html',
  styleUrls: ['./refraction-ui.component.css']
})
export class RefractionUiComponent {
  @Output() generateEvent = new EventEmitter();

  constructor() { }

  onGenerateButtonClick() : void {
    this.generateEvent.emit();
  }
}
