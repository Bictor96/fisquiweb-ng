import { AfterViewInit, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CircuitsAnimation } from '../animations/classes/circuits/circuits-animation';
import { BaseLabComponent } from '../base-component/base-lab';
import { LabSettingsService } from '../lab-settings.service';

@Component({
  selector: 'app-circuits-lab',
  templateUrl: './circuits-lab.component.html',
  styleUrls: ['./circuits-lab.component.scss']
})
export class CircuitsLabComponent extends BaseLabComponent implements AfterViewInit {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : CircuitsAnimation;

  constructor(private labSettings: LabSettingsService, renderer: Renderer2, ngZone : NgZone) {
    super(renderer, ngZone, 'circuits-lab', 960, 640);
    this.animation = new CircuitsAnimation();
   }

  ngAfterViewInit() : void {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
  }

}
