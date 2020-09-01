import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';
import { Router } from '@angular/router';
import { Score } from '../score';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boardGames: BoardGame[];
  scores: Score[];
  scoreOfGame: number;
  licznik: number;

  constructor(private boardgame: BoardgameService, private router: Router, private scoreService: ScoreService) {
  this.scores = [new Score()]; 
  }

  ngOnInit(): void {
    this.boardgame.findAll().subscribe(data => {
      this.boardGames = data;
      console.log(data);
    });
    this.scoreService.findAll().subscribe(data => {
      this.scores = data;
      console.log(data);
    });   
  }

  navigateTo(boardgame: any) {
    console.log(boardgame.id);
    this.router.navigate(['/boardGames/'+ boardgame.id]);
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
