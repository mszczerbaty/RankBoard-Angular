import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardGame } from '../entities/boardgame';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  private boardGamesUrl: string;
  constructor(private http: HttpClient) {
    this.boardGamesUrl = `${environment.apiUrl}/boardgames/`;
   }
   public findAll(): Observable<BoardGame[]> {
     console.log("pobieram liste gier");
    return this.http.get<BoardGame[]>(this.boardGamesUrl);
  }
 
  public save(boardGame: BoardGame) {
    return this.http.post<BoardGame>(this.boardGamesUrl, boardGame);
  }

  findById(boardId: number): Observable<BoardGame> {
    return this.http.get<BoardGame>(this.boardGamesUrl.concat(boardId.toString()));
  }

  delete(boardId: number): Observable<{}>{
    return this.http.delete<BoardGame>(this.boardGamesUrl.concat(boardId.toString()));
  }

  update (boardGame: BoardGame, boardId: number) {
    return this.http.put<BoardGame>(this.boardGamesUrl.concat(boardId.toString()), boardGame);
  }

  findByAuthorId(authorId: number): Observable<BoardGame[]> {
    return this.http.get<BoardGame[]>(this.boardGamesUrl.concat("author/", authorId.toString()));
  }
}
