import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotGame } from '../entities/hotgame';

@Injectable({
  providedIn: 'root'
})
export class HotGamesService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable < HotGame[] > {
    return this.http.get<HotGame[]>('https://bgg-json.azurewebsites.net/hot');
  }

}