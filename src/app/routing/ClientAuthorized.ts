import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class ClientAuthorized implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(): boolean {
    // убедиться, что роль подходящая
    return true;
  }
}
