import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IArtCard } from '../../models/art-card';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private basicObject = { webImage: { url: '' }, headerImage: { url: '' }, longTitle: '', title: ''};
  private artSubject = new BehaviorSubject<IArtCard[]>([this.basicObject]);
  public arts$: Observable<IArtCard[]> = this.artSubject.asObservable();
  private artsList: IArtCard[];

  constructor(private httpClient: HttpClient) {
    this.getArts().subscribe();
  }

  getArts(): Observable<IArtCard[]> {
    const url = API_URL;
    return this.httpClient.get<{ artObjects: [] }>(url).pipe(
      map((items) => {
        this.artsList = items.artObjects;
        this.artSubject.next(this.artsList);
        return this.artsList;
      }),
      catchError((err) => {
        console.log(err);
        return [];
      })
    );
  }
}
