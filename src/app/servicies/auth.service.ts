import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token;
  constructor(private router: Router, private usersService: UsersService) {
  }

  isLoggedin(): boolean {
    return localStorage.getItem('token') != null;
  }

  navigate() {
    this.token = localStorage.getItem('token');
    const decodedToken = this.usersService.getDecodedAccessToken(this.token);
    if (decodedToken.roleName === 'user') {
      this.router.navigate([`/userProfile/${decodedToken.userId}`])
    } else if (decodedToken.roleName === 'admin') {
      this.router.navigate([`/admin/${decodedToken.userId}`])
    }
  }

  isAuth(): any{
    if(localStorage.getItem('token')) {
      return true
    }
   return this.router.navigate(['login'])
    // return localStorage.getItem('token') ? true : false;
  }


  // isAuth(): boolean {
  //   this.token = localStorage.getItem('token');
  //   if(this.token){
  //     const decodedToken = this.usersService.getDecodedAccessToken(this.token);
  //     return true
  //   }
  //   return false;
  // }






  // isAuth(): boolean {
  //   // const isAuth = localStorage.getItem('token') ? true : false;
  //   // const admin = localStorage.getItem('role');
  //   // const isAdmin = Boolean(admin === 'admin');
  //   // const token = localStorage.getItem('token');
  //   //
  //   // if (!isAuth) {
  //   //   alert('false');
  //   //   this.router.navigate(['login']);
  //   //   return false;
  //   // } else {
  //   //   const decodedToken = this.usersService.getDecodedAccessToken(token);
  //   //   const userId = decodedToken.userId;
  //   //   const url = isAdmin ? '/admin' : '/userProfile';
  //   //   this.router.navigate([`${url}/${userId}`]);
  //   //   return true;
  //   // }
  //
  //
  //   // else if (isAuth && isAdmin) {
  //   //   console.log(isAdmin);
  //   //   console.log('/////////////////////', token);
  //   //   const decodedToken = this.usersService.getDecodedAccessToken(token);
  //   //   const userId = decodedToken.userId;
  //   //   console.log(userId);
  //   //   // alert('admin');
  //   //   this.router.navigate(['/admin', userId]);
  //   //   return true;
  //   // }
  //   // else {
  //   //   // alert('user');
  //   //   const decodedToken = this.usersService.getDecodedAccessToken(token);
  //   //   const userId = decodedToken.userId;
  //   //   this.router.navigate(['/userProfile', userId]);
  //   //
  //   //   return true;
  //   // }
  // }

  isAdmin() {
    const admin = localStorage.getItem('role');
    return Boolean(admin === 'admin');
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
    return false;
  }

}

