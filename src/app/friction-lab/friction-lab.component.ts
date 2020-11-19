import { Component, ViewChild, ElementRef } from '@angular/core';
import {NgZone, Renderer2} from '@angular/core';
import { Line } from '../animations/classes/line';
import { FrictionAnimation } from '../animations/friction-animation';
import { BaseLabComponent } from '../base-component/base-lab';
import { FrictionObject } from '../animations/classes/friction-object';
import { FrictionData } from '../classes/friction-data';
import { CustomSpriteClass } from '../animations/classes/custom-sprite-class';


@Component({
  selector: 'friction-lab',
  templateUrl: './friction-lab.component.html',
  styleUrls: ['./friction-lab.component.css']
})

// TODO: SE PUEDE HACER LA GRAVEDAD VARIABLE.
export class FrictionLabComponent extends BaseLabComponent {
  private animation : FrictionAnimation;

  @ViewChild("Animation") animationDiv: ElementRef;

  constructor(renderer: Renderer2,  ngZone: NgZone) 
  {
    super(renderer, ngZone);
    this.animation = new FrictionAnimation();
  }
  
  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();

    this.animation.animate();
  }

  onInitEvent() : void {
  }

  onStopEvent() : void {
  }

  onResetEvent() : void {
  }
}
