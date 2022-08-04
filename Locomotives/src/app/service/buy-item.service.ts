import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BuyItem } from '../models/buyItem.model';

@Injectable({
  providedIn: 'root'
})
export class BuyItemService {

  BASE_URL: string = environment.apiUrl + 'buyitems'

  constructor(
    private http: HttpClient
  ) { }

  public saveBuyItem(buyItem: BuyItem): Observable<BuyItem> {
    return this.http.post<BuyItem>(this.BASE_URL, buyItem)
  };

  public getItems(): Observable<BuyItem> {
    return this.http.get<BuyItem>(this.BASE_URL)
  };

  public deleteItem(_id: string) {
    return this.http.delete(this.BASE_URL + _id)
  };

}
