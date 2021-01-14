import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/entities/author';
import { AuthorService } from 'src/app/services/author.service';
import { Extension } from 'src/app/entities/extension';
import { ExtensionService } from 'src/app/services/extension.service';
import { IfStmt } from '@angular/compiler';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.css']
})
export class BoardTileComponent implements OnInit {

  @Input() id;
  @Input() boardgamename;
  @Input() publishyear;
  @Input() estplaytime;
  @Input() players;
  @Input() description;
  @Input() forage;
  @Input() imageLink;

  authorsOfGame: Author[];
  extensionsOfGame: Extension[];

  displayExt = false;
  showExtId: number;

  constructor(private authorService: AuthorService, private extensionService: ExtensionService, 
    private router: Router, private authenticationService: AuthenticationService) {
   }

  ngOnInit(): void {
    console.log(this.id);//
    this.authorService.findByGameId(this.id).subscribe(authors => {
      this.authorsOfGame = authors;
      console.log(authors);//
    });
    this.extensionService.findByGameId(this.id).subscribe(extensions => {
      this.extensionsOfGame = extensions;
      console.log(extensions);//
    });
  }

  getColor(score: number){
    if(score>=8){
      return "#039c00";
    } else if(score >=5) {
      return "#0076ac";
    } else {
      return "#af5d00";
    }
  }

  navigateToAuthor(authorId: number){
    this.router.navigate(['/authors/'+ authorId]);
  }

  navigateToBoardgameEdit(boardgameId: number) {
    this.router.navigate(['/boardGames/' + boardgameId + '/edit/']);
  }

  showExtension(extensionId: number){
    this.showExtId = extensionId;
    this.displayExt = !this.displayExt;
  }

  adminCheck() {
    return this.authenticationService.adminCheck();
  }

}
