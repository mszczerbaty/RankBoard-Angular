import { Component, OnInit } from '@angular/core';
import { Author } from '../../entities/author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BoardgameService } from 'src/app/services/boardgame.service';


@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  authorId: number;
  author: Author;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private router: Router, private boardgameService: BoardgameService) {
    this.author = new Author();
  }

  onSubmit() {
    this.author.boardgames = this.selectedItems;
    this.authorService.update(this.author, this.authorId).subscribe(() => this.router.navigate(['/authors']));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.authorId = +params.id;
      console.log(this.authorId);//test
      this.authorService.findById(this.authorId).subscribe(data => {
        this.author = data
        console.log(this.author);//test
        this.selectedItems = this.author.boardgames;
      });
      this.boardgameService.findAll().subscribe(data => {
        this.dropdownList = data;
      });
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'boardgamename',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  deleteAuthor(author: any) {
    this.authorService.delete(author.id).subscribe(() => console.log("author deleted"));
    this.router.navigate(['/authors/']);
  }
}
