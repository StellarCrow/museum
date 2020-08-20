import { Injectable } from '@angular/core';
import { IArtCard } from '../../models/art-card';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesList: IArtCard[] = [];
  private count = new BehaviorSubject<number>(0);
  public count$ = this.count.asObservable();

  constructor() {
  }

  public addToFavorites(art: IArtCard): void {
    this.favoritesList.push(art);
    this.count.next(this.favoritesList.length);
  }

  public removeFromFavorites(id: string): void {
    this.favoritesList = this.favoritesList.filter(item => item.objectNumber !== id);
    this.count.next(this.favoritesList.length);
  }

  public isInFavorites(id: string): boolean {
    const index = this.favoritesList.findIndex(item => item.objectNumber === id);
    return index !== -1;
  }

  public getFavoritesList(): IArtCard[] {
    return this.favoritesList;
  }


}
