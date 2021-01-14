import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../../entities/boardgame';
import { BoardgameService } from '../../services/boardgame.service';
import { Router } from '@angular/router';
import { ScoreService } from '../../services/score.service';
import { ScoreAverage } from 'src/app/entities/score-average';
import { ScoreCount } from 'src/app/entities/score-count';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boardGames: BoardGame[];
  scores: ScoreAverage[];
  scoreOfGame: number;
  score: number;
  scoresCount: ScoreCount[];
  scoreCount: number;

  constructor(private boardgameService: BoardgameService, private router: Router, private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.boardgameService.findAll().subscribe(data => {
      this.boardGames = data;
      console.log(data);//
    });
    this.scoreService.getAverageScores().subscribe(data => {
      this.scores = data;
      console.log(data);//
    });
    this.scoreService.countScores().subscribe(data => {
      this.scoresCount = data;
      console.log(data);//
    });
  }

  navigateTo(boardgame: any) {
    console.log(boardgame.id);
    this.router.navigate(['/boardGames/' + boardgame.id]);
  }

  getAverageScore(id: number) {
    this.score == 0;
    try {
      if (this.scores.some(x => x.boardgameId === id)) {
        this.score = this.scores.find(x => x.boardgameId === id).score;
        return this.score;
      }
    } catch (error) {
      //console.log(error);
    }
  }

  getNumberOfVotes(id: number){
    this.scoreCount == 0;
    try {
      if (this.scoresCount.some(x => x.boardgameId === id)) {
        this.scoreCount = this.scoresCount.find(x => x.boardgameId === id).scoreCount;
        return this.scoreCount;
      }
    } catch (error) {
      //console.log(error);
    }
  }



}