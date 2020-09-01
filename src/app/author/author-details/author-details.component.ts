import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  authorId: number;
  author: Author;

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.authorId = +params.id;
      this.authorService.findById(this.authorId).subscribe(author => this.author = author);
    });
  }

  navigateTo(author: any) {
    this.router.navigate(['/authors/'+ author.id + '/edit/']);
    }

}
