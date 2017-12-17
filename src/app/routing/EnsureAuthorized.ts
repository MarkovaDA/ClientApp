import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
import {UserProfile} from '../models/response/Profile';
import {AuthService} from '../services/auth/auth.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class EnsureAuthorized implements CanActivate {


  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {

  }

  canActivate(): Observable<boolean> {
    const url = window.location.pathname;

    //если авторизация подтверждена и страница соответствует роли
    /*if (this.isFetched && this.userProfile != null
        && url.startsWith('/'.concat(this.userProfile.role))) {
        return true;
    }
    this.router.navigateByUrl('/login');
    return false;*/
    return null;
  }
}
