import { AfterViewInit, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { RefractionAnimation } from '../animations/refraction-animation';
import { BaseLabComponent } from '../base-component/base-lab';
import { RefractionData } from '../classes/refraction-data';

@Component({
  selector: 'refraction-lab',
  templateUrl: './refraction-lab.component.html',
  styleUrls: ['./refraction-lab.component.css']
})
export class RefractionLabComponent extends BaseLabComponent implements AfterViewInit {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : RefractionAnimation;
  refractionData : RefractionData;

  constructor(renderer : Renderer2, ngZone : NgZone) {
    super(renderer, ngZone, 720, 480);
    this.refractionData = new RefractionData();
    this.animation = new RefractionAnimation(this.refractionData);

   }

  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
    this.animation.animate();
  }

  onGenerateEventReceived() : void {
    this.animation.generateBeam();
  }

  onProtractorEventReceived(data : any) : void {
    if (data.event == 'rotate') 
      this.rotateProtractor(data.direction);
    else if (data.event == 'toggle')
      this.animation.toggleProtractor();
  }

  rotateProtractor(direction : string) : void {
    if (direction == 'right')
      this.animation.rotateProtactorRight();
    else if (direction == 'left')
      this.animation.rotateProtractorLeft();
  }
}
