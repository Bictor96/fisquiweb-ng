import { Component, Renderer2, NgZone, AfterViewInit, OnInit, ViewChild, ElementRef, Inject} from "@angular/core";
import * as PIXI from 'pixi.js';
import { LabSettingsService } from '../lab-settings.service';

@Component({
  template: ''
})

export class BaseLabComponent implements OnInit, AfterViewInit {
  private app : PIXI.Application;
  private width : number;
  private height : number;
  private isVisible = true;
  private TAG : string;

  constructor(
    private renderer: Renderer2, 
    private ngZone : NgZone, 
    @Inject(String) TAG : String = '',
    @Inject(Number) width: number = 1080, 
    @Inject(Number) height = 240) {
    this.width = width;
    this.height = height;
  }

  getTag() : String {return this.TAG};

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new PIXI.Application({
        width: this.width, height: 
        this.height, 
        backgroundColor: 0x303030, 
        antialias: true});
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