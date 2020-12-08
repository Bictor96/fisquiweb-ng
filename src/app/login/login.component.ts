import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm : FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    console.log("Login Initiated")
    this.loginForm = new FormGroup({
      user: new FormControl(''),
      password : new FormControl('')
    });
  }

  login(){
    console.log("Login")
    this.authService.validate(this.loginForm.value.user, this.loginForm.value.password)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']})
      this.router.navigate(['settings']);
    });
  }

}
