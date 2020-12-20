import { Injectable } from '@angular/core';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string {
    return sessionStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token): void {
    sessionStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken): void {
    sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    sessionStorage.removeItem(REFRESH_TOKEN);
  }
}
