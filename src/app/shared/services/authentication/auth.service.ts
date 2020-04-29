import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInUserInfo: {};
  userAuthenticated: EventEmitter<Boolean>;

  constructor(private http: HttpClient) {
    this.userAuthenticated = new EventEmitter();
  }

  public isAuthenticated(): Boolean {
    let userData = localStorage.getItem('userInfo');
    if (userData && JSON.parse(userData)) {
      return true;
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('userInfo');
    this.userAuthenticated.emit(false);
  }

  public setUserInfo(user) {
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.userAuthenticated.emit(true);
  }

  public validate(email, password) {
    return this.http
      .post('http://localhost:8000/api/authenticate', { username: email, password: password })
      .toPromise();
  }
}
