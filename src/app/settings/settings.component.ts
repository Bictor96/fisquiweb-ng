import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
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
