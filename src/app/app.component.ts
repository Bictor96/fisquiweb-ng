import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LabSettingsService } from './lab-settings.service';
import { Lab } from './labs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fisquiweb';
  labs : Array<Lab>;

  constructor(
    private labSettings : LabSettingsService,
    private authService : AuthService, 
    private router : Router) {}

  ngOnInit() {
    this.labs = this.labSettings.getLabs();
  }

  isLogged() : Boolean {
    return this.authService.isAuthenticated();
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
