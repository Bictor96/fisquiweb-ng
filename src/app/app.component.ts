import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fisquiweb';

  constructor(private authService : AuthService, private router : Router) {}

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
