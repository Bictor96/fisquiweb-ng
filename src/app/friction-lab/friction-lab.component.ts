import { Component, ViewChild, ElementRef } from '@angular/core';
import {NgZone, Renderer2} from '@angular/core';
import { FrictionAnimation } from '../animations/friction-animation';
import { BaseLabComponent } from '../base-component/base-lab';
import { FrictionData } from '../classes/friction-data';


@Component({
  selector: 'friction-lab',
  templateUrl: './friction-lab.component.html',
  styleUrls: ['./friction-lab.component.css']
})

/* 
* TODO:
* [] Centrar linea de fuerza en la bola
* [] Estilizar linea
* [] Cambiar bola
* [] Cambiar fondo al cambiar friccion
* []  Bloquear input mientras esta en ejecucion
* [] Añadir algun efecto al incrementar masa
* [] Como se calcula el movimiento y la fuerza necesaria para mantenear el movimiento
*    una vez pasado el scanner
*/
export class FrictionLabComponent extends BaseLabComponent {
  private animation : FrictionAnimation;
  frictionData : FrictionData;

  @ViewChild("Animation") animationDiv: ElementRef;

  constructor(renderer: Renderer2,  ngZone: NgZone) 
  {
    super(renderer, ngZone, 840, 240);
    this.frictionData = new FrictionData();
    this.animation = new FrictionAnimation(this.frictionData);
  }
  
  ngAfterViewInit() {
    this.getRenderer().appendChild(this.animationDiv.nativeElement, this.getApp().view);
    this.animation.setApp(this.getApp());
    this.animation.setup();
  }

  onInitEvent() : void {
    console.log("Init event received");
    this.animation.animate();

    setInterval(() => {
      this.frictionData;
    }, 100);
  }

  onStopEvent() : void {
  }

  onResetEvent() : void {
  }
}
