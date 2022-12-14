import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocoModel } from '../models/diesel.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricService {

  BASE_URL: string = environment.apiUrl + 'locomotives' + '/' + 'electric';

  constructor(
    private http: HttpClient
  ) { }

  public getElectric(): Observable<LocoModel[]> {
    return this.http.get<LocoModel[]>(this.BASE_URL)
  };

  public getElectricOne(_id: string): Observable<LocoModel> {
    return this.http.get<LocoModel>(`${environment.apiUrl}locomotives/${_id}`)
  };

}
