import { Component, ViewChild, ElementRef } from '@angular/core';
import { BaseLabComponent } from '../base-component/base-lab';
import {NgZone, Renderer2} from '@angular/core';
import { DynamicAnimation } from '../animations/dynamic-animation';
import {DynamicInputData} from '../classes/dynamic-input-data';
import { TimeLoopService } from '../time-loop.service';
import { DynamicOutputData } from '../classes/dynamic-output-data';
import { DynamicOutputComponent } from './dynamic-output/dynamic-output.component';

@Component({
  selector: 'app-dynamic-lab',
  templateUrl: './dynamic-lab.component.html',
  styleUrls: ['./dynamic-lab.component.css']
})
export class DynamicLabComponent extends BaseLabComponent {
  private animation : DynamicAnimation;
  actualData : DynamicOutputData;

  @ViewChild("Animation") animationDiv: ElementRef;
  @ViewChild("DynamicOutput") dynamicOutput : DynamicOutputComponent;

  constructor(renderer: Renderer2,  ngZone: NgZone, private timeLoop: TimeLoopService) 
  {
    super(renderer, ngZone);
    this.animation = new DynamicAnimation();
    this.actualData = new DynamicOutputData(0, new DynamicInputData(1, 1, 1, 1, 1)); 
  }
  
  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
    this.timeLoop.setLoop(50, 10000);
  }

  onInitEvent(data : DynamicInputData) : void {
    console.log("Initing Dynamic Lab");
    console.log("Data: " + JSON.stringify(data));
    this.timeLoop.loop((time: number) => {
      console.log(time);
      let timeModule = time % 100;
      if (timeModule == 0) {
        this.actualData = new DynamicOutputData(time, data);
        this.animation.setVelocity(this.actualData.velocity);
      }

      let secondModule = time % 1000;
      if (secondModule == 0 ) {
        this.dynamicOutput.addToTable(this.actualData);
      } 
    });

    this.animation.animate();
  }

  onStopEvent() : void {
    console.log("Stoping Dynamic Lab")
    this.animation.stop();
    this.timeLoop.stop();
  }

  onResetEvent() : void {
    console.log("Reseting Dynamic Lab");
    this.animation.reset();
    this.timeLoop.clear();
    this.dynamicOutput.clear();
  }

  onUpdateForce(data) : void {
    console.log("onUpdateForce");
    const value = data.value;
    if (data.sign == 'positive')
      this.animation.updatePositiveForceLine(value);
    else 
      this.animation.updateNegativeForceLine(value);
  }
}
