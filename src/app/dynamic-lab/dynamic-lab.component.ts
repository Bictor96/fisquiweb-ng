import { Component, ViewChild, ElementRef } from '@angular/core';
import { BaseLabComponent } from '../base-component/base-lab';
import {NgZone, Renderer2} from '@angular/core';
import { DynamicAnimation } from '../animations/dynamic-animation';
import {DynamicInputData} from '../classes/dynamic-input-data';
import { TimeLoopService } from '../time-loop.service';

@Component({
  selector: 'app-dynamic-lab',
  templateUrl: './dynamic-lab.component.html',
  styleUrls: ['./dynamic-lab.component.css']
})
export class DynamicLabComponent extends BaseLabComponent {
  private animation : DynamicAnimation;

  @ViewChild("Animation") animationDiv: ElementRef;

  constructor(
    renderer: Renderer2, 
    ngZone: NgZone,
    private timeLoop: TimeLoopService) 
    {
      super(renderer, ngZone);
      this.animation = new DynamicAnimation();
    }
  
  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
  }

  onInitEvent(data : DynamicInputData) : void {
    console.log("Initing Dynamic Lab")
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
  }
}
