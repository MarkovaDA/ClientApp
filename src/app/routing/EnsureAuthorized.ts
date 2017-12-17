import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
import {UserProfile} from '../models/response/Profile';


@Injectable()
export class EnsureAuthorized implements CanActivate {
  private isFetched;
  private userProfile: UserProfile = null;

  constructor(private userService: UserService,
              private router: Router) {
    /*this.isFetched = false;
    this.userService.getUserProfile().subscribe((profile) => {
        this.isFetched = true;
        this.userProfile = profile;
        console.log('user profile fetched', profile);
      },
      (error) => {
        this.isFetched = true;
      });*/
  }

  canActivate(): boolean {
    const url = window.location.pathname;
    //если авторизация подтверждена и страница соответствует роли
    /*if (this.isFetched && this.userProfile != null
        && url.startsWith('/'.concat(this.userProfile.role))) {
        return true;
    }
    this.router.navigateByUrl('/login');
    return false;*/
    return true;
  }
}
