import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.authorService.findAll().subscribe(data => {
      this.authors = data;
      console.log(data);
    })
  }
  navigateTo(author: any) {
    console.log(author.id)//testing
    this.router.navigate(['/authors/'+ author.id]);
    }
}
