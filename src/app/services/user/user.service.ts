import { UserProfile } from '../../models/response/Profile';
import { Injectable } from '@angular/core';
import { AppState } from './../../app.state';
import * as AppActions from '../../actions/AppActions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {
 constructor(private store: Store<AppState>){}

 getUserProfile(): Observable<UserProfile> {
   return this.store.select('profile');
 }

 setUserProfile(profile: UserProfile ) {
   this.store.dispatch(new AppActions.FetchProfile(profile))
 }

 resetUserProfile() {
   this.store.dispatch(new AppActions.ResetProfile(null));
 }
}
