import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';
import {NgZone} from '@angular/core';
import { KinematicAnimation } from './kinematic-animation';

@Component({
  selector: 'kinematic-lab',
  templateUrl: './kinematic-lab.component.html',
  styleUrls: ['./kinematic-lab.component.css']
})
export class KinematicLabComponent implements OnInit {
  public app: PIXI.Application;
  public animation : KinematicAnimation;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) { }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new PIXI.Application({width: 720, height: 480, backgroundColor: 0xFFFFFF});
      this.animation = new KinematicAnimation(this.app);
    });

    this.animation.init();
    this.elementRef.nativeElement.appendChild(this.app.view);
  }

  ngOnInit(): void {
    this.init();
  }

  destroy() {
    this.app.destroy();
  }

  ngOnDestroy() : void {
    this.destroy();
  }

}
