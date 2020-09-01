import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../boardgame';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/author/author.service';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {

  boardGame: BoardGame;
  boardId: number;

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private router: Router, private boardGameService: BoardgameService) {
    this.boardGame = new BoardGame();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardId = +params.id;
      this.boardGameService.findById(this.boardId).subscribe(boardGame => this.boardGame = boardGame);
    });
  }

  deleteBoardGame(boardGame: any) {
    this.boardGameService.delete(boardGame.id).subscribe(() => console.log("boardGame deleted"));
    this.router.navigate(['/boardGames/']);
    }

    onSubmit() {
      this.boardGameService.update(this.boardGame, this.boardId).subscribe(() => this.router.navigate(['/boardGames']));
    }

}
