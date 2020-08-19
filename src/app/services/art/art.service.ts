import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IArtCard } from '../../models/art-card';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { API_KEY } from '../../constants/key';
import { DEFAULT_COUNT_PER_PAGE } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private basicObject = { webImage: { url: '' }, headerImage: { url: '' }, longTitle: '', title: '', objectNumber: '' };
  private artSubject = new BehaviorSubject<IArtCard[]>([this.basicObject]);
  private search = new BehaviorSubject<string>('');
  private sorting = new BehaviorSubject<string>('');
  private amount = new BehaviorSubject<number>(DEFAULT_COUNT_PER_PAGE);
  private page = new BehaviorSubject<number>(0);
  private totalCount = new BehaviorSubject<number>(0);
  public totalCount$ = this.totalCount.asObservable();
  public amount$ = this.amount.asObservable();
  public page$ = this.page.asObservable();
  public arts$: Observable<IArtCard[]> = this.artSubject.asObservable();
  private artsList: IArtCard[];

  constructor(private httpClient: HttpClient) {
    this.initArts();
  }

  private initArts(): void {
    const search$ = this.search.asObservable();
    const sort$ = this.sorting.asObservable();
    const amount$ = this.amount.asObservable();
    const page$ = this.page.asObservable();
    combineLatest([sort$, search$, amount$, page$]).pipe(
      map(([sortQuery, searchQuery, amountNum, pageNum]) => {
        const url = this.buildUrl(sortQuery, searchQuery, amountNum, pageNum);
        return this.sendRequestToServer(url).subscribe(data => {
          this.artSubject.next(data);
        });
      })
    ).subscribe();
  }

  private buildUrl(sort: string, search: string, amount: number, page: number): string {
    return `${API_URL}?key=${API_KEY}&imgonly=true&q=${search}&s=${sort}&ps=${amount}&p=${page}`;
  }

  private sendRequestToServer(url): Observable<IArtCard[]> {
    return this.httpClient.get<{ artObjects: [], count: number }>(url).pipe(
      map(items => {
        this.artsList = items.artObjects;
        this.artSubject.next(this.artsList);
        this.totalCount.next(items.count);
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

  public setPage(num: number) {
    this.page.next(num);
  }

}
