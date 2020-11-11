export interface LabAnimation {
  init() : void;
  animate() : void;
  stop() : void;
  reset() : void;
  setApp(app : PIXI.Application) : void;
}