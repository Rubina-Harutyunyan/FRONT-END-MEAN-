import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements  CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(!this.authService.isAdmin()) {
      return this.authService.signOut();
    }
    return this.authService.isAdmin();
  }
}


