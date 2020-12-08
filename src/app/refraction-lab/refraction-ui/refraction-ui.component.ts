import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RefractionData } from 'src/app/classes/refraction-data';

@Component({
  selector: 'refraction-ui',
  templateUrl: './refraction-ui.component.html',
  styleUrls: ['./refraction-ui.component.scss']
})
export class RefractionUiComponent implements OnInit {
  @Input("data") refractionData : RefractionData;
  @Output() generateEvent = new EventEmitter();
  @Output() protractorEvent = new EventEmitter();
  refractionForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.refractionForm = this.formBuilder.group({
      n1 : new FormControl(this.refractionData.getN1()),
      n2 : new FormControl(this.refractionData.getN2()),
    });

    this.onChanges();
  }

  onChanges() : void {
    this.refractionForm.valueChanges.subscribe(val => {
      console.log("Cambio en refraction data");
      this.updateRefractionData(val);
    });
  }

  onRightButton() : void {
    let data = {
      event : 'rotate',
      direction : 'right'
    }; 

    this.protractorEvent.emit(data);
  }

  onLeftButton() : void {
    let data = {
      event : 'rotate',
      direction : 'left'
    }; 

    this.protractorEvent.emit(data);
  }

  onShowHideButton() : void {
    let data = {
      event : 'toggle',
    }; 

    this.protractorEvent.emit(data);
  }

  private updateRefractionData(value : object) {
    this.refractionData.setN1(Number(value["n1"]));
    this.refractionData.setN2(Number(value["n2"]));

    console.log(this.refractionData.toString());
  }

  onGenerateButtonClick() : void {
    this.generateEvent.emit();
  }
}
