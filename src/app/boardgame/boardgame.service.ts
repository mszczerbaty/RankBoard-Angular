import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardGame } from './boardgame';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  private boardGamesUrl: string;
  constructor(private http: HttpClient) {
    this.boardGamesUrl = 'http://localhost:8080/RankBoard/games/'
   }
   public findAll(): Observable<BoardGame[]> {
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
}
