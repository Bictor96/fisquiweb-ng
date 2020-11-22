import { Component, OnInit } from '@angular/core';
import { BaseLabComponent } from '../base-component/base-lab';
import { Renderer2, NgZone, ViewChild, ElementRef } from "@angular/core";
import { EnergyAnimation } from '../animations/energy-animation';

@Component({
  selector: 'app-energy-lab',
  templateUrl: './energy-lab.component.html',
  styleUrls: ['./energy-lab.component.css']
})

export class EnergyLabComponent extends BaseLabComponent {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : EnergyAnimation;

  constructor(renderer : Renderer2, ngZone : NgZone) {
    super(renderer, ngZone, 720, 480); 
    this.animation = new EnergyAnimation();
   }

   ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
  }
}
