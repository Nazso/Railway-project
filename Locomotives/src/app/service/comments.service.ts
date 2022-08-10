import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  BASE_URL: string = environment.apiUrl + 'comments';

  constructor(
    private http: HttpClient
  ) { }

  public saveComment(comment: Comment): Observable<Comment> {
      return this.http.post<Comment>(this.BASE_URL, comment)
  };

  public getComment(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.BASE_URL)
  };

  public getOneComment(_id: string): Observable<Comment> {
    return this.http.get<Comment>(this.BASE_URL + _id)
  };

  public get(id?: string): Observable<Comment | Comment[]> {
    return this.http.get<Comment | Comment[]>(`${this.BASE_URL}/${id || ''}`)
  };

  public put(id: string, comment: Comment): Observable<any> {
    return this.http.put<Comment>(`${this.BASE_URL}/${id}`, comment);
  }
  
  public deleteComment(_id:string): Observable<Comment> {
    return this.http.delete<Comment>(this.BASE_URL + _id)
  };

}
