import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js';
import {NgZone, Renderer2} from '@angular/core';
import { KinematicAnimation } from './kinematic-animation';
import { KinematicData } from '../classes/kinematic-data';
import { TimeLoopService } from '../time-loop.service';
import { KinematicOutputData } from '../classes/kinematic-output-data';
import { KinematicOutputComponent } from '../kinematic-output/kinematic-output.component';
import { BaseLabComponent } from '../base-component/base-lab';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'kinematic-lab',
  templateUrl: './kinematic-lab.component.html',
  styleUrls: ['./kinematic-lab.component.css']
})
export class KinematicLabComponent extends BaseLabComponent {
  private animation : KinematicAnimation;
  public actualTime : number;
  public actualData : KinematicData;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  @ViewChild("kinematicOuput") private kinematicOutput : KinematicOutputComponent;
  @ViewChild("Animation") animationDiv: ElementRef;

  constructor(
    renderer: Renderer2, 
    ngZone: NgZone,
    private timeLoop: TimeLoopService) {
      super(renderer, ngZone);
      this.animation = new KinematicAnimation();
      this.actualData = new KinematicData(1,1,1);
      this.actualTime = 0;
      this.timeLoop.setLoop(30000, 50);
  }

  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.init();
  }

  onInitEvent(data: KinematicData) {
    this.timeLoop.loop((time: number) => {
      console.log(time);
      let timeModule = time % 100;
      if (timeModule == 0) {
        this.actualTime = Number(time / 1000);
        this.actualData = this.calculateLinearMotion(data, this.actualTime);
        this.animation.setVelocity(this.actualData.velocity);
      }

      let secondModule = time % 1000;
      if (secondModule == 0 ) {
        this.kinematicOutput.addData(new KinematicOutputData(this.actualTime, this.actualData))
        //this.tableData.push(new KinematicOutputData(this.actualTime, this.actualData));
      } 
    });

    this.animation.animate();
  }

  onStopEvent() {
    this.animation.stop();
    this.timeLoop.stop();
  }

  onResetEvent() {
    this.animation.reset();
    this.kinematicOutput.clearData();
    this.timeLoop.clear();
  }

  private calculateLinearMotion(data: KinematicData, time: number) : KinematicData {
    return data.getKinematicDataInTime(time);
  }

}
