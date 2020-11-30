import { AfterViewInit, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RefractionAnimation } from '../animations/refraction-animation';
import { BaseLabComponent } from '../base-component/base-lab';

@Component({
  selector: 'refraction-lab',
  templateUrl: './refraction-lab.component.html',
  styleUrls: ['./refraction-lab.component.css']
})
export class RefractionLabComponent extends BaseLabComponent implements AfterViewInit {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : RefractionAnimation;

  constructor(renderer : Renderer2, ngZone : NgZone) {
    super(renderer, ngZone, 720, 480);
    this.animation = new RefractionAnimation();
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
}
