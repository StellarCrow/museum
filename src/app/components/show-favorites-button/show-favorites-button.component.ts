import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Observable } from 'rxjs';
import { ArtService } from '../../services/art/art.service';

@Component({
  selector: 'app-show-favorites-button',
  templateUrl: './show-favorites-button.component.html',
  styleUrls: ['./show-favorites-button.component.scss']
})
export class ShowFavoritesButtonComponent implements OnInit {
  public favCount$: Observable<number>;
  public isFavorites = false;

  constructor(private favoriteService: FavoritesService, private artService: ArtService) {
  }

  ngOnInit(): void {
    this.favCount$ = this.favoriteService.count$;
  }

  public showFavs() {
    this.isFavorites = !this.isFavorites;
    const list = this.favoriteService.getFavoritesList();
    this.artService.showFavorites(list, this.isFavorites);
  }

}
