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
  private sorting = new BehaviorSubject<string>('');
  private amount = new BehaviorSubject<number>(10);
  public arts$: Observable<IArtCard[]> = this.artSubject.asObservable();
  private artsList: IArtCard[];

  constructor(private httpClient: HttpClient) {
    this.initArts();
    this.getArts().subscribe();
  }

  private initArts(): void {
    const search$ = this.search.asObservable();
    const sort$ = this.sorting.asObservable();
    const amount$ = this.amount.asObservable();
    combineLatest([sort$, search$, amount$]).pipe(
      map(([sortQuery, searchQuery, amountNum]) => {
        const url = this.buildUrl(sortQuery, searchQuery, amountNum);
        return this.sendRequestToServer(url).subscribe(data => {
          this.artSubject.next(data);
        });
      })
    ).subscribe();
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

  private buildUrl(sort: string, search: string, amount: number): string {
    return `${API_URL}?key=${API_KEY}&imgonly=true&q=${search}&s=${sort}&ps=${amount}`;
  }

  private sendRequestToServer(url): Observable<IArtCard[]> {
    return this.httpClient.get<{ artObjects: [] }>(url).pipe(
      map(items => {
        this.artsList = items.artObjects;
        this.artSubject.next(this.artsList);
        return this.artsList;
      })
    );
  }

  public searchArt(query: string): void {
    this.search.next(query);
  }

  public sort(query: string): void {
    this.sorting.next(query);
  }

  public setAmount(num: number) {
    this.amount.next(num);
  }

}
