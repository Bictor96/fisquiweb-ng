import { EventEmitter, Injectable } from '@angular/core';
import { Lab, Labs } from './labs';

@Injectable({
  providedIn: 'root'
})
export class LabSettingsService {
  toggleVisibility : EventEmitter<string> = new EventEmitter<string>();
  private labs : Array<Lab>= Labs;

  constructor() { 

  }

  getLabs() : Array<Lab> { return this.labs; }

  toggleLabVisibility(labTAG) : void {
    this.labs.forEach((lab) => {
      if (lab.path == labTAG) {
        console.log("Toggling visibility of " + lab.path);
        lab.isVisible = !lab.isVisible;
      }
    });
  }
}
