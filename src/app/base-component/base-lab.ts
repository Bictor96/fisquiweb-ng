import { Component, Renderer2, NgZone, AfterViewInit, OnInit, ViewChild, ElementRef} from "@angular/core";
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { LabAnimation } from '../interfaces/lab-animation';
import * as PIXI from 'pixi.js';

@Component({
  template: ''
})

export class BaseLabComponent implements OnInit, AfterViewInit {
  private app : PIXI.Application;

  constructor(private renderer: Renderer2, private ngZone : NgZone) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new PIXI.Application({width: 1080, height: 240, backgroundColor: 0xFFFFFF, antialias: true});
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy() : void {
    this.destroy();
  }

  destroy() {
    this.app.destroy();
  }

  getApp() : PIXI.Application {
    return this.app;
  }

  getRenderer() : Renderer2 {
    return this.renderer;
  }

  adjustCanvasSize(width : number, height : number) {
    this.app.view.width = width;
    this.app.view.height = height;
  }
}