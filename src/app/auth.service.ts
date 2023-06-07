import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private token: string;

  constructor() {
    this.token = localStorage.getItem('token') ?? '';
  }

  getToken() {
    return this.token;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.getToken() !== '';
  }
}
