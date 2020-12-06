import { Text, TextStyle } from 'pixi.js';

export class ComponentText extends Text {
  constructor(text : string) {
    super(text);
    this.style = new TextStyle({
      fontFamily: 'Arial',
      fill: '#fbf236',
      fontSize: 20,
    });
  }
}