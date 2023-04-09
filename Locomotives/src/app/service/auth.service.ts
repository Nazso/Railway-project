import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedInUser?: User = {
    username: '',
    email: ''
  }

  login(username: string, email: string): void {
    this._loggedInUser = {
      username: '',
      email: ''
    }
  }

  get loggedInUser(): User | undefined {
    return this._loggedInUser
  }

  logout(): void {
    this._loggedInUser = undefined;
  }

  constructor() { }
}
