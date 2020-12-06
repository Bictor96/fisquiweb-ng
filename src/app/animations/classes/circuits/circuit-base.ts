import { Point, Text } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { CustomSpriteClass } from '../custom-sprite-class';
import { BoardConnector } from './board-connector';
import BoardConnectors from './board-connectors';
import { CircuitComponent } from './circuit-component';
import { ComponentText } from './component-text';
import { Resistance } from './resistance';

export class CircuitBase extends CustomSpriteClass {
  private boardConnectors : BoardConnectors;
  private circuitData : CircuitData;
  private voltageLabel : ComponentText;

  private components : CircuitComponent[]

  constructor() {
    super('assets/circuit-base.png', 0, 0);
    this.circuitData = new CircuitData();
    this.boardConnectors = new BoardConnectors(this);
    this.voltageLabel = new ComponentText(this.circuitData.totalVoltage.toString());
    this.components = new Array<CircuitComponent>();
  
    this.addChild(this.voltageLabel);
    this.voltageLabel.position = new Point(380, 22);

    this.on('component-removed', this.onComponentRemoved)
    this.on('resistance-updated', this.onResistanceUpdated)
  }

  setIfComponentOnConnector(component : CircuitComponent) : void {
    let isSet = this.boardConnectors.setIfNearEnough(component);
    if (isSet) {
      this.components.push(component);
      console.log("Connected Components: " + this.components.length);
    }
  }

  incrementVoltage() {
    if (this.circuitData.totalVoltage < 100) {
      this.updateVoltage(10);
    }
  }

  decrementVoltage() {
    if (this.circuitData.totalVoltage > 0) {
      this.updateVoltage(-10);
    }
  }

  updateVoltage(quantity : number) {
    this.circuitData.totalVoltage += quantity;
    this.voltageLabel.text = this.circuitData.totalVoltage.toFixed(0);
    this.updateComponents();
  }

  getCircuitData() {
    return this.circuitData;
  }

  private onComponentRemoved(component : CircuitComponent) {
    component.onRemoved(this.circuitData);
    this.parent.emit('component-removed', component);
    this.components = this.components.filter(c => c != component);
    console.log("Connected Components: " + this.components.length);
  }

  private onResistanceUpdated(value : number) {
    console.log("Resistance Updated");
    this.circuitData.resistance += value;
    this.updateComponents();
  }

  private updateComponents() {
    this.components.forEach((c) => {
      console.log("Updating " + c.constructor.name);
      c.updateLabel(this.circuitData);
    });
  }
}