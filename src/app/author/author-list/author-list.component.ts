import { Component, OnInit } from '@angular/core';
import { Author } from '../../entities/author';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(private router: Router, private authorSevrice: AuthorService) {
   }

  ngOnInit(): void {
    this.authorSevrice.findAll().subscribe(data => {
      this.authors = data;
    })
  }
  navigateTo(author: any) {
    console.log(author.id)//testing
    this.router.navigate(['/authors/'+ author.id]);
    }

}
