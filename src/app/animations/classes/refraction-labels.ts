import { Text } from 'pixi.js';
import { RefractionData } from 'src/app/classes/refraction-data';
import { RefractionContainer } from './refraction-container';

export class RefractionLabels {
  refractionData : RefractionData;
  labelN1 : Text;
  labelN2 : Text;

  constructor(container : RefractionContainer) {
    this.refractionData = container.getData();
    this.labelN1 = new Text("N1: " + this.refractionData.getN1());
    this.labelN1.x = container.width - 120;
    this.labelN1.y = 20;
    this.labelN2 = new Text("N2: " + this.refractionData.getN2());
    this.labelN2.x = 20;
    this.labelN2.y = container.height - 100;

    container.addChild(this.labelN1);
    container.addChild(this.labelN2);
  }

  update() : void {
    this.labelN1.text = "N1= " + this.refractionData.getN1()
    this.labelN2.text = "N2= " + this.refractionData.getN2()
  }
}