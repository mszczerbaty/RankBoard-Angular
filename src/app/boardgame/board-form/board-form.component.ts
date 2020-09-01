import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent {

  boardGame: BoardGame;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private boardGameService: BoardgameService){
      this.boardGame = new BoardGame();
    }
onSubmit() {
  console.log(this.boardGame);
  this.boardGameService.save(this.boardGame).subscribe(result => this.router.navigate(['/boardGames']));
}
}
