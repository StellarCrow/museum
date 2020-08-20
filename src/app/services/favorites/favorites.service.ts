import { Injectable } from '@angular/core';
import { IArtCard } from '../../models/art-card';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesList: IArtCard[] = [];

  constructor() {
  }

  public addToFavorites(art: IArtCard): void {
    this.favoritesList.push(art);
    console.log(this.favoritesList);
  }

  public removeFromFavorites(id: string): void {
    this.favoritesList = this.favoritesList.filter(item => item.objectNumber !== id);
  }

  public isInFavorites(id: string): boolean {
    const index = this.favoritesList.findIndex(item => item.objectNumber === id);
    return index !== -1;
  }

  public getFavoritesList(): IArtCard[] {
    return this.favoritesList;
  }


}
