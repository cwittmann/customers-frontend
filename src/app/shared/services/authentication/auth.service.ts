import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserId: string;
  loggedInUserInfo: {};
  userAuthenticated: EventEmitter<Boolean>;

  constructor(private http: HttpClient) {
    this.userAuthenticated = new EventEmitter();
  }

  public isAuthenticated(): Boolean {
    let userId = localStorage.getItem('userId');
    if (userId && JSON.parse(userId)) {
      return true;
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('userId');
    this.userAuthenticated.emit(false);
  }

  public setUserInfo(userId) {
    localStorage.setItem('userId', JSON.stringify(userId));
    this.currentUserId = userId;
    this.userAuthenticated.emit(true);
  }

  public getCurrentUserId() {
    let userIdJSON = localStorage.getItem('userId');
    let userId = JSON.parse(userIdJSON);

    return userId.user;
  }

  public validate(email, password) {
    return this.http
      .post('https://customers-backend.herokuapp.com/api/authenticate', { username: email, password: password })
      .toPromise();
  }

  public register(user) {
    return this.http.post('https://customers-backend.herokuapp.com/api/register', user).toPromise();
  }
}
