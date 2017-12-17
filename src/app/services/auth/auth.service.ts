import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CashData } from '../../cash/cash';
import { User } from '../../models/User';
import { authUrl, apiUrl, userProfileUrl } from './../api.urls';
import { UserProfile } from '../../models/response/Profile';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private cashData: CashData) {}

  login(user: User): Promise<any> {
    const { username, password } = user;

    const credentials = new URLSearchParams();
    credentials.append('username', username);
    credentials.append('password', password);
    credentials.append('grant_type', 'password');

    const loginHeaders: HttpHeaders = new HttpHeaders()
      .set('Audience', 'Any')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json');
       return this.http.post(apiUrl.concat(authUrl), credentials.toString(), { headers: loginHeaders })
      .toPromise();
  }

  private isTokenExpired(): boolean {
    const expiration = new Date(this.cashData.getExpiresIn());
    return expiration < new Date();
  }

  private isTokenExists(): boolean {
    return (this.cashData.getAccessToken() != null);
  }

  isTokenCorrect(): boolean {
    return this.isTokenExists() && this.isTokenExpired();
  }

  ensureAuthorized(): Observable<UserProfile> {
    const token = this.cashData.getAccessToken();
    return this.http.get<UserProfile>(apiUrl.concat(userProfileUrl), {
      headers: new HttpHeaders()
        .set('Accept', 'application/json')
        .append('Authorization', `Bearer ${token}`)
    });

  }

  saveUserMetadata(profile: UserProfile): void {
    this.cashData.setSessionInfo(profile);
  }

  clearUserMetaData() {
    this.cashData.clearSession();
  }
}
