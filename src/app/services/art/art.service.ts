import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IArtCard } from '../../models/art-card';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { API_KEY } from '../../constants/key';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private basicObject = { webImage: { url: '' }, headerImage: { url: '' }, longTitle: '', title: '', objectNumber: '' };
  private artSubject = new BehaviorSubject<IArtCard[]>([this.basicObject]);
  private search = new BehaviorSubject<string>('');
  public arts$: Observable<IArtCard[]> = this.artSubject.asObservable();
  private artsList: IArtCard[];

  constructor(private httpClient: HttpClient) {
    this.getArts().subscribe();
  }

  private getArts(): Observable<IArtCard[] | never> {
    const url = `${API_URL}?key=${API_KEY}`;
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

  public searchArt(query): Observable<IArtCard[]> {
    const url = `${API_URL}?key=${API_KEY}&q=${query}`;
    return this.httpClient.get<{ artObjects: [] }>(url).pipe(
      map(items => {
        this.artsList = items.artObjects;
        this.artSubject.next(this.artsList);
        console.log(this.artsList);
        return this.artsList;
      })
    );
  }

}
