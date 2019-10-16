import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
  }

  registerUser(user) {
    return this.http.post('http://localhost:3000/auth/register', user);
  }

  login(user) {
    return this.http.post('http://localhost:3000/auth/login', user);
  }


  setToken(token) {
    localStorage.setItem('token', token);
  }

  setRole(role){
    localStorage.setItem('role', role);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  getUserById(userId) {
    return this.http.get(`http://localhost:3000/auth/${userId}`)
  }



}
