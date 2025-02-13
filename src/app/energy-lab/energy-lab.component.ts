import { Component, OnInit } from '@angular/core';
import { BaseLabComponent } from '../base-component/base-lab';
import { Renderer2, NgZone, ViewChild, ElementRef } from "@angular/core";
import { EnergyAnimation } from '../animations/energy-animation';
import { EnergyData } from '../classes/energy-data';
import { LabSettingsService } from '../lab-settings.service';

@Component({
  selector: 'app-energy-lab',
  templateUrl: './energy-lab.component.html',
  styleUrls: ['./energy-lab.component.scss']
})

/**
 * TODO
 * - [] Input : Que el incremento sea decimal
 * - [] Input : No pueda haber valores negativos
 * - [] Output : Reaccionar cuando los datos cambian
 * - [] Animation : Si se actualiza el rozamiento, la barra cinetica se pone en negativo
 */
export class EnergyLabComponent extends BaseLabComponent {
  @ViewChild("Animation") animationDiv: ElementRef;
  private animation : EnergyAnimation;
  energyData : EnergyData;

  constructor(private labSettings : LabSettingsService,  renderer : Renderer2, ngZone : NgZone) {
    super( renderer, ngZone, 'energy-lab', 720, 480); 
    this.energyData = new EnergyData(0, 0.3, 1, 0);
    this.animation = new EnergyAnimation(this.energyData);
  }

  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
  }

  onInitEvent() : void {
    console.log("Init received");
    this.animation.startDropTicker();
  }
}
