import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BoardListComponent } from './boardgame/board-list/board-list.component';
import { BoardFormComponent } from './boardgame/board-form/board-form.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorDetailsComponent } from './author/author-details/author-details.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { BoardgameService } from './boardgame/boardgame.service';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { BoardDetailsComponent } from './boardgame/board-details/board-details.component';
import { BoardEditComponent } from './boardgame/board-edit/board-edit.component';
import { BoardRankingComponent } from './boardgame/board-ranking/board-ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardFormComponent,
    NavigationBarComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    AuthorFormComponent,
    AuthorEditComponent,
    BoardDetailsComponent,
    BoardEditComponent,
    BoardRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [BoardgameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
