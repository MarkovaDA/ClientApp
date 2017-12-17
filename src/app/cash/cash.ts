import {Injectable} from '@angular/core';

@Injectable()
export class CashData {
  constructor() {}

  setSessionInfo(response: any): void {
    localStorage.setItem('accessToken', response['access_token']);
    localStorage.setItem('expiresIn', response['expires_in']);
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  getExpiresIn(): string {
    return localStorage.getItem('expiresIn');
  }

  clearSession(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiresIn');
  }
}
