import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';
import { ArtListComponent } from './components/art-list/art-list.component';
import { ArtCardComponent } from './components/art-card/art-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { ColorsComponent } from './components/colors/colors.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortingComponent } from './components/sorting/sorting.component';
import { CountPerPageComponent } from './components/count-per-page/count-per-page.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainPageComponent,
    ArtPageComponent,
    ArtListComponent,
    ArtCardComponent,
    ModalComponent,
    ColorsComponent,
    DetailsTableComponent,
    SearchComponent,
    SortingComponent,
    CountPerPageComponent,
    PaginationComponent,
    FavoriteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
