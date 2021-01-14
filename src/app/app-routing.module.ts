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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExtensionEditComponent } from './extension/extension-edit/extension-edit.component';
import { ExtensionFormComponent } from './extension/extension-form/extension-form.component';
import { LoginGuard } from './helpers/login-guard';
import { AdminGuard } from './helpers/admin-guard';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'boardGames', component: BoardListComponent },
  { path: 'boardGames/:id', component: BoardDetailsComponent, canActivate: [LoginGuard] },
  { path: 'boardGames/:id/edit', component: BoardEditComponent, canActivate: [AdminGuard] },
  { path: 'addBoardGame', component: BoardFormComponent, canActivate: [AdminGuard] },
  { path: 'authors', component: AuthorListComponent, canActivate: [LoginGuard] },
  { path: 'addAuthor', component: AuthorFormComponent, canActivate: [AdminGuard] },
  { path: 'authors/:id', component: AuthorDetailsComponent, canActivate: [LoginGuard] },
  { path: 'authors/:id/edit', component: AuthorEditComponent, canActivate: [AdminGuard] },
  { path: 'addExtension', component: ExtensionFormComponent, canActivate: [AdminGuard]},
  { path: 'extension/:id/edit', component: ExtensionEditComponent, canActivate: [AdminGuard]}
  ,{ path: '**', redirectTo: 'boardGames' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
