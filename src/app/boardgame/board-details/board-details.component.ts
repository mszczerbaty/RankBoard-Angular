import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Score } from '../score';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {

  boardId: number;
  boardGame: BoardGame;
  scoreOfGame: Score;

  constructor(private route: ActivatedRoute, private boardGameService: BoardgameService, private router: Router, private scoreService: ScoreService) {
    this.scoreOfGame = new Score();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardId = +params.id;
      this.boardGameService.findById(this.boardId).subscribe(boardGame => {
        this.boardGame = boardGame;
        this.scoreOfGame.boardgame = boardGame;
      });
    });

  }

  navigateTo(boardGame: any) {
    this.router.navigate(['/boardGames/'+ boardGame.id + '/edit/']);
    }

    onSubmit() {
      console.log(this.scoreOfGame);
      this.scoreService.save(this.scoreOfGame).subscribe(result => this.router.navigate(['/boardGames']));
    }

    validate(value: number){
      if(value >= 1 && value <= 5){
        return true;
      } else return false;
    }
}
