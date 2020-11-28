import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { WaveAnimation } from '../animations/wave-animation';
import { BaseLabComponent } from '../base-component/base-lab';
import { WaveData } from '../classes/wave-data';

@Component({
  selector: 'app-wave-lab',
  templateUrl: './wave-lab.component.html',
  styleUrls: ['./wave-lab.component.css']
})

/**
 * TODO:
 * - [] Animacion : Herramienta para medir las ondas
 * - [] Animacion : Cuadricula
 * - [] Lab : Escala cuadricula en cms.
 */

export class WaveLabComponent extends BaseLabComponent {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : WaveAnimation;
  private waveData : WaveData;

  constructor(renderer: Renderer2, ngZone : NgZone) {
    super(renderer, ngZone, 720, 480);
    this.waveData = new WaveData(10, 50);
    this.animation = new WaveAnimation(this.waveData);
   }

   ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
    this.animation.animate();
  }

  onControlEventReceived(run : boolean) : void {
    if (run) {
      this.animation.animate();
    } else {
      this.animation.stop();
    }
  }

  onChangeEventReceived(newData : WaveData) {
    console.log("Changin data to " + JSON.stringify(newData));
    this.waveData = newData;
    this.animation.updateWaveData(this.waveData);
  }
}
