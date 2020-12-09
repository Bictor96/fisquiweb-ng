import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lab, Labs } from './labs';
import { LabsProviderService } from './labs-provider.service';

@Injectable({
  providedIn: 'root'
})
export class LabSettingsService {
  toggleVisibility : EventEmitter<string> = new EventEmitter<string>();
  private _labs : BehaviorSubject<Array<Lab>> = new BehaviorSubject(Array());
  public readonly labs : Observable<Array<Lab>> = this._labs.asObservable();

  constructor(private labsProvider : LabsProviderService) {
    this.loadLabs();
  }

  private loadLabs() {
    this.labsProvider.retrieveLabs().subscribe((response) => {
      if (response["statusCode"] == 200) {
        this._labs.next(response["labs"]);
      } else {
        console.log("Error retrieving labs");
      }
    });
  }

  getLabs() : Observable<Array<Lab>> { return this.labs; }

  saveLabs() : void {
    this._labs.getValue().forEach((lab) => {
      this.labsProvider.updateLab(lab).then(() => {
        console.log(lab.path + " updated");
      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
