import { JsonPipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cpuUsage } from 'process';
import { AuthService } from '../auth.service';
import { LabSettingsService } from '../lab-settings.service';
import { Lab } from '../labs';
import { StyleManager } from '../stylemanager';
import { ThemeStorage } from '../themepicker/themestorage/theme-storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [StyleManager, ThemeStorage]
})

export class SettingsComponent implements OnInit {
  labs : Array<Lab>;

  constructor(
    private labSettings : LabSettingsService,
    private authService : AuthService, 
    private router : Router) { }

  ngOnInit(): void {
    this.labSettings.getLabs().subscribe((labs) => {
      console.log("Loaded labs in app component");
      this.labs = labs;
    });
  }

  toggleVisibility(labTAG : string) {
    console.log("Toggling VIS " + labTAG);
    this.labs.forEach((lab) => {
      if (lab.path == labTAG) {
        console.log("Modifying Visibility of " + labTAG);
        lab.isVisible = !lab.isVisible;
      }
    });
  }

  changeName(labTAG : string) {
    this.labs.forEach((lab) => {
      if (lab.path == labTAG) {
        console.log("Modifying Name of " + labTAG);
        lab.isVisible = !lab.isVisible;
      }
    });
  }

  onChange(event : any, labTAG : string) {
    console.log("Cambio en  " + event.target.value);
    this.labs.forEach((lab) => {
      if (lab.path == labTAG) {
        console.log("Modifying Name of " + labTAG + " to " + event.target.value);
        lab.label = event.target.value
      }
    });
  }

  save() : void {
    this.labSettings.saveLabs();
  }

  logout() : void {
    console.log("Logout called");
    this.authService.logout()
    .then((response) => {
      this.authService.resetUserInfo();
      console.log("Logout with sucess");
      this.router.navigate(['']);
    });
  }
}



