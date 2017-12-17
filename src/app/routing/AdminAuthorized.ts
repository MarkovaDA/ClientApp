import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AdminAuthorized implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(): boolean {
    // убедиться, что роль подходящая
    /*if (this.authService.ensureAuthorized()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }*/
    return true;
  }
}
