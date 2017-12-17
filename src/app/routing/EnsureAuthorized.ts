import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EnsureAuthorized implements CanActivate {


  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(): Observable<boolean> {
    const url = window.location.pathname;
    return new Observable<boolean>(observer => {
      if (!this.authService.isTokenCorrect()) {
        console.log('guard: token not correct');
        this.router.navigateByUrl('/login');
        return observer.next(false);
      }
      else {
        this.authService.ensureAuthorized().subscribe((profile) => {
          if (url.startsWith('/'.concat(profile.role))) {

            return observer.next(true);
          }
        }, (error) => {
          this.router.navigateByUrl('/login');
          console.log('guard: server-response error', error);
          return observer.next(false);
        });
      }
    });
  }
}
