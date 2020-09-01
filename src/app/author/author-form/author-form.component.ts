import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BoardGame } from '../../boardgame/boardgame';
import { BoardgameService } from '../../boardgame/boardgame.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit{

  author: Author;
  boardGames: BoardGame[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService, private boardgame: BoardgameService){
      this.author = new Author();
    }

onSubmit() {
  this.author.boardgames = this.selectedItems;
  console.log(this.author);
  this.authorService.save(this.author).subscribe(result => this.gotToAuthorList());
}

gotToAuthorList() {
  this.router.navigate(['/authors']);
}

dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  ngOnInit() {
    this.boardgame.findAll().subscribe(data => {
      this.boardGames = data;
      this.dropdownList = data;
      console.log(data);
    })
    this.selectedItems = [];
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
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}
}
