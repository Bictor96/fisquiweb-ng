import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { KinematicData } from './kinematic-data'

export class KinematicOutputData {
  time: number
  kinematicData: KinematicData;

  constructor(time: number, data: KinematicData) {
    this.time = time; 
    this.kinematicData = data;
  }
}