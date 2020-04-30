import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async getUser(id: string): Promise<User[]> {
    return this.http.get<User[]>('http://localhost:8000/api/users/' + id).toPromise();
  }
}
