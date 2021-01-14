import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HotGame } from '../entities/hotgame';
import { HotGamesService } from '../services/hot-games.service';

@Component({
  selector: 'app-hot-games',
  templateUrl: './hot-games.component.html',
  styleUrls: ['./hot-games.component.css']
})
export class HotGamesComponent implements OnInit {

  hotGames: HotGame[];

  constructor(private http: HttpClient, private hotGamesService: HotGamesService) { }

  ngOnInit(): void {
    //move to service
    this.hotGamesService.findAll().subscribe(data => {
      this.hotGames = data;
      console.log(data);//
    })
  }

}
