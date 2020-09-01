import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './boardgame/board-list/board-list.component';
import { BoardFormComponent } from './boardgame/board-form/board-form.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { AuthorDetailsComponent } from './author/author-details/author-details.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { BoardDetailsComponent } from './boardgame/board-details/board-details.component';
import { BoardEditComponent } from './boardgame/board-edit/board-edit.component';



const routes: Routes = [
  { path: 'boardGames', component: BoardListComponent },
  { path: 'boardGames/:id', component: BoardDetailsComponent },
  { path: 'boardGames/:id/edit', component: BoardEditComponent },
  { path: 'addBoardGame', component: BoardFormComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'addAuthor', component: AuthorFormComponent },
  { path: 'authors/:id', component: AuthorDetailsComponent },
  { path: 'authors/:id/edit', component: AuthorEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
