import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { IArtCard } from '../../models/art-card';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() art: IArtCard;
  public isInList: boolean;

  constructor(private favoriteService: FavoritesService) {
  }

  ngOnInit(): void {
    this.isInList = this.favoriteService.isInFavorites(this.art.objectNumber);
  }

  public manageFavList(): void {
    this.isInList = !this.isInList;
    if (this.isInList) {
      this.favoriteService.addToFavorites(this.art);
    } else {
      this.favoriteService.removeFromFavorites(this.art.objectNumber);
    }
  }

}
