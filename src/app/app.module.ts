import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BoardListComponent } from './boardgame/board-list/board-list.component';
import { BoardFormComponent } from './boardgame/board-form/board-form.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorDetailsComponent } from './author/author-details/author-details.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { BoardgameService } from './services/boardgame.service';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { BoardDetailsComponent } from './boardgame/board-details/board-details.component';
import { BoardEditComponent } from './boardgame/board-edit/board-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthorService } from './services/author.service';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { RegisterComponent } from './register/register.component';
import { BoardTileComponent } from './boardgame/board-tile/board-tile.component';
import { ScoreTileComponent } from './boardgame/score-tile/score-tile.component';
import { ExtensionService } from './services/extension.service';
import { ScoreService } from './services/score.service';
import { HotGamesComponent } from './hot-games/hot-games.component';
import { ExtensionFormComponent } from './extension/extension-form/extension-form.component';
import { ExtensionEditComponent } from './extension/extension-edit/extension-edit.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ExtensionTileComponent } from './extension/extension-tile/extension-tile.component';
import { LoginGuard } from './helpers/login-guard';
import { AdminGuard } from './helpers/admin-guard';

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
    LoginComponent,
    RegisterComponent,
    BoardTileComponent,
    ScoreTileComponent,
    HotGamesComponent,
    ExtensionFormComponent,
    ExtensionEditComponent,
    ExtensionTileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    BoardgameService,
    AuthorService,
    ExtensionService,
    ScoreService,
    LoginGuard,
    AdminGuard
    ,{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




