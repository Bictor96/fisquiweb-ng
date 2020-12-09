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
    this.labs = this.labSettings.getLabs();
  }

  toggleVisibility(labTAG : string) {
    console.log("Toggling VIS " + labTAG);
    this.labSettings.toggleVisibility.emit(labTAG);
    this.labSettings.toggleLabVisibility(labTAG);
  }

  changeName(labTAG : string) {
    
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



