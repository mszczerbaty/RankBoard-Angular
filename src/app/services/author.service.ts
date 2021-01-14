import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author } from '../entities/author';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl: string;

  constructor(private http: HttpClient) {
    this.authorUrl = `${environment.apiUrl}/authors/`;
  }

  findByGameId(gameId: number): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl.concat("game/",gameId.toString()));
  }

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(`${environment.apiUrl}/authors`);
  }
  public save(author: Author) {
    return this.http.post<Author>(this.authorUrl, author);
  }

  findById(authorId: number): Observable<Author> {
    return this.http.get<Author>(this.authorUrl.concat(authorId.toString()));
  }

  delete(authorId: number): Observable<{}> {
    return this.http.delete<Author>(this.authorUrl.concat(authorId.toString()));
  }

  update(author: Author, authorId: number) {
    return this.http.put<Author>(this.authorUrl.concat(authorId.toString()), author);
  }
}
