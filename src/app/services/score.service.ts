import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from '../entities/score';
import { Observable } from 'rxjs';
import { ScoreAverage } from '../entities/score-average';
import { ScoreCount } from '../entities/score-count';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scoreUrl: string;
  constructor(private http: HttpClient) {
    this.scoreUrl = `${environment.apiUrl}/scores/`;
   }

   public save(score: Score) {
    return this.http.post<Score>(this.scoreUrl, score);
  }

  public findAll(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreUrl);
  }

  public findByGameId(gameId: number): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreUrl.concat("game/",gameId.toString()));
  }

  public getAverageScores(): Observable<ScoreAverage[]> {
    return this.http.get<ScoreAverage[]>(this.scoreUrl.concat('topAverage'));
  }

  public countScores(): Observable<ScoreCount[]> {
    return this.http.get<ScoreCount[]>(this.scoreUrl.concat('count'));
  }
   
}
