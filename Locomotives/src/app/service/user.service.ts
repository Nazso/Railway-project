import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = environment.apiUrl + 'users';

  constructor(
    private http: HttpClient
  ) { }

  public saveUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL, newUser)
  };

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL)
  };

  public updateUser(newUser: User): Observable<User> {
    return this.http.put<User>(this.BASE_URL, newUser)
  };

  public deleteUser(_id: string): Observable<User> {
    return this.http.delete<User>(this.BASE_URL + _id)
  };

};
