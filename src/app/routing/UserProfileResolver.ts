import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { UserProfile } from '../models/response/Profile';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserProfileResolver implements Resolve<Observable<UserProfile>> {

  constructor(private authService: AuthService,
              private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('RESOLVER');
    //return this.authService.ensureAuthorized();
    return this.userService.getUserProfile();
  }
}
