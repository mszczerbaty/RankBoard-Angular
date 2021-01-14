import { Component, OnInit } from '@angular/core';
import { Author } from '../../entities/author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { BoardgameService } from 'src/app/services/boardgame.service';
import { BoardGame } from 'src/app/entities/boardgame';
import { ScoreService } from 'src/app/services/score.service';
import { ScoreAverage } from 'src/app/entities/score-average';
import { ScoreCount } from 'src/app/entities/score-count';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  authorId: number;
  author: Author;
  boardgamesOfAuthor: BoardGame[];
  scores: ScoreAverage[];
  score: number;
  scoresCount: ScoreCount[];
  scoreCount: number;

  constructor(private route: ActivatedRoute, private authorService: AuthorService,
    private router: Router, private boardGameService: BoardgameService, private scoreService: ScoreService, 
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.authorId = +params.id;
      this.authorService.findById(this.authorId).subscribe(author => this.author = author);
      this.boardGameService.findByAuthorId(this.authorId).subscribe(boardgames => this.boardgamesOfAuthor = boardgames)
    });
    this.scoreService.getAverageScores().subscribe(data => {
      this.scores = data;
      console.log(data);
    });
    this.scoreService.countScores().subscribe(data => {
      this.scoresCount = data;
      console.log(data);
    });
  }

  navigateTo(boardgameId: number) {
    this.router.navigate(['/boardGames/' + boardgameId]);
  }

  navigateToAuthorEdit(authorId: number) {
    this.router.navigate(['/authors/' + authorId + '/edit/']);
  }

  adminCheck() {
    return this.authenticationService.adminCheck();
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

  getNumberOfVotes(id: number) {
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
