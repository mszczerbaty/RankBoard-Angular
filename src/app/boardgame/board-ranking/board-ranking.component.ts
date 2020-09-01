import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../boardgame.service';
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';
import { BoardGame } from '../boardgame';
import { Score } from '../score';

@Component({
  selector: 'app-board-ranking',
  templateUrl: './board-ranking.component.html',
  styleUrls: ['./board-ranking.component.css']
})
export class BoardRankingComponent implements OnInit {

  boardGames: BoardGame[];
  scores: Score[];
  scoreOfGame: number;
  licznik: number;

  tempScore: number;

  constructor(private boardGameService: BoardgameService, private router: Router, private scoreService: ScoreService) {
   }


  ngOnInit(): void {
    this.boardGameService.findAll().subscribe(data => {
      this.boardGames = data;
      console.log(data);
    });
    this.scoreService.findAll().subscribe(data => {
      this.scores = data;
    });
    
  }

    getAverageScore(boardGameId: number){
      this.scoreOfGame = 0;
      this.licznik = 0;
      for(let j=0;j<this.scores.length;j++){  
        if(this.scores[j].boardgame.id == boardGameId){
          this.scoreOfGame+= this.scores[j].score;
          this.licznik++;
        }
        }
      return this.scoreOfGame/this.licznik;
    }

}
