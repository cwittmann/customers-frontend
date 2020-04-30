import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authentication/auth.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User;
  errorMessage: String;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const uuid = uuidv4();
    this.user = new User(uuid, null, null, null, null, null);
  }

  register() {
    this.authService
      .register(this.user)
      .then((response) => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        this.errorMessage = 'An error occured during registration.';
      });
  }
}
