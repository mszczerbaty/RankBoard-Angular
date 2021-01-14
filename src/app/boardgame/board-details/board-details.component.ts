import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../../entities/boardgame';
import { BoardgameService } from '../../services/boardgame.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Score } from '../../entities/score';
import { ScoreService } from '../../services/score.service';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/entities/author';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {

  boardId: number;
  boardGame: BoardGame;
  scoreOfGame: Score;
  scoresOfGame: Score[];
  
  showAddReview = false;

  constructor(private route: ActivatedRoute, private boardGameService: BoardgameService, private router: Router, private scoreService: ScoreService) {
  this.scoreOfGame = new Score;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardId = +params.id;
      this.boardGameService.findById(this.boardId).subscribe(data => {
        this.boardGame = data;
        this.scoreOfGame.boardgame = data;
      });
      this.scoreService.findByGameId(this.boardId).subscribe(scores => {
        this.scoresOfGame = scores;
        console.log(scores);//
      });
    });
  }

  navigateTo(boardGame: any) {
    this.router.navigate(['/boardGames/' + boardGame.id + '/edit/']);
  }

  onSubmit() {
    console.log(this.scoreOfGame);//
    this.scoreService.save(this.scoreOfGame).subscribe(result => window.location.reload());
  }

  validate(value: number, text: String) {
    if (value >= 1 && value <= 10) {
      return true;
    } else return false;
  }

  addAReview() {
    this.showAddReview = !this.showAddReview;
  }
}
