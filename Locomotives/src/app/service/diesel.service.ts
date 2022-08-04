import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocoModel } from '../models/diesel.model';

@Injectable({
  providedIn: 'root'
})
export class DieselService {

BASE_URL: string = environment.apiUrl + "locomotives" + "/" + "diesel";

  constructor(private http: HttpClient) { }

  public getDiesel(): Observable<LocoModel[]> {
    return this.http.get<LocoModel[]>(this.BASE_URL);
  };

}
