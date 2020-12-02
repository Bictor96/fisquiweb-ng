import { AfterViewInit, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CircuitsAnimation } from '../animations/classes/circuits/circuits-animation';
import { BaseLabComponent } from '../base-component/base-lab';

@Component({
  selector: 'app-circuits-lab',
  templateUrl: './circuits-lab.component.html',
  styleUrls: ['./circuits-lab.component.css']
})
export class CircuitsLabComponent extends BaseLabComponent implements AfterViewInit {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : CircuitsAnimation;

  constructor(renderer: Renderer2, ngZone : NgZone) {
    super(renderer, ngZone, 800, 640);
    this.animation = new CircuitsAnimation();
   }

  ngAfterViewInit() : void {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
  }

}
