import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authentication/auth.service';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: String;
  userPassword: String;
  errorMessage: String;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService
      .validate(this.userName, this.userPassword)
      .then((response) => {
        this.authService.setUserInfo({ user: response['user'] });
        this.router.navigate(['customer']);
      })
      .catch((error) => {
        this.errorMessage = "Username and password don't match.";
      });
  }
}
