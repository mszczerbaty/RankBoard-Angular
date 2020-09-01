import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl: string;
  constructor(private http: HttpClient) {
    this.authorUrl = 'http://localhost:8080/RankBoard/authors/'
   }
   public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl);
  }
 
  public save(author: Author) {
    return this.http.post<Author>(this.authorUrl, author);
  }

  findById(authorId: number): Observable<Author> {
    return this.http.get<Author>(this.authorUrl.concat(authorId.toString()));
  }

  delete(authorId: number): Observable<{}>{
    return this.http.delete<Author>(this.authorUrl.concat(authorId.toString()));
  }

  update (author: Author, authorId: number) {
    return this.http.put<Author>(this.authorUrl.concat(authorId.toString()), author);
  }
}
