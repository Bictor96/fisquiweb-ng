import { Point, Text } from 'pixi.js';
import { CircuitData } from 'src/app/classes/circuits-data';
import { BoardConnector } from './board-connector';
import { CircuitComponent } from './circuit-component';
import { ComponentText } from './component-text';
import { ParallelResistance } from './parallel_resistance';
import { Resistance } from './resistance';

export class Voltimeter extends CircuitComponent {
  private label : ComponentText;
  constructor(x : number, y : number) {
    super('assets/voltimeter.png', x , y);
    this.label = new ComponentText("0.0");
    this.label.position = new Point(-18, -67);

    this.moveLeftConnection(-97, 69);
    this.moveRightConnection(92, 68);

    this.addChild(this.label);
    this.on('pointerdown', this.onClick);
  }

  private onClick(event) {
    console.log(event.data.getLocalPosition(this));
  }

  setOnBoard(connector : BoardConnector ) : void {
    let TAG = connector.TAG;
    let position = connector.midPoint;
    if (TAG == 'left') {
      this.position = new Point(position.x + 70, position.y + 8);
    } else if (TAG == 'bot') {
      this.position = new Point(position.x, position.y - 69 );
    } else if (TAG == 'right') {
      this.position = new Point(position.x - 70, position.y - 8);
    }
    this.boardConnector = connector;
  }

  updateData(data : CircuitData) : void {
    let connectedComponent = this.boardConnector.getConnectedComponent();
    if (connectedComponent.constructor.name == Resistance.name) {
      let resistance = (<Resistance> connectedComponent).getResistance();
      this.label.text = data.getVoltage(resistance).toFixed(2);
    }

    if (connectedComponent.constructor.name == ParallelResistance.name) {
      let resistance = (<ParallelResistance> connectedComponent).getTotalResistance();
      this.label.text = data.getVoltage(resistance).toFixed(2);
    }

  }

  updateLabel(data : CircuitData) : void {
    let connectedComponent = this.boardConnector.getConnectedComponent();
    if (connectedComponent.constructor.name == Resistance.name) {
      let resistance = (<Resistance> connectedComponent).getResistance();
      this.label.text = data.getVoltage(resistance).toFixed(2);
    }

    if (connectedComponent.constructor.name == ParallelResistance.name) {
      let resistance = (<ParallelResistance> connectedComponent).getTotalResistance();
      this.label.text = data.getVoltage(resistance).toFixed(2);
    }
  }

  onRemoved(circuitData = new CircuitData()) : void {
    this.boardConnector = null;
    this.parallelConnector = null;
    this.resetLabel();
  }

  resetLabel() : void {
    this.label.text = "0.0";
  }
}