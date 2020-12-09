import { Component, OnInit } from '@angular/core';
import { LabSettingsService } from '../lab-settings.service';
import { Lab } from '../labs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  labs : Array<Lab>;
  constructor(private labSettings : LabSettingsService) { }

  ngOnInit(): void {
    this.labSettings.getLabs().subscribe((labs) => {
      console.log("Loaded labs in app component");
      this.labs = labs;
    });
  }
}
