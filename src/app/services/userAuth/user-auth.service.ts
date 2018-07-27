import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private http: HttpClient) { }

  signUpNewUser(userInfo: {email: string, password: string}) {
    return this.http.post('/users/register', userInfo);
  }

  login(user: {email: string, password: string}) {
    return this.http.post('/users/login', user);
  }
  checkAuth() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
