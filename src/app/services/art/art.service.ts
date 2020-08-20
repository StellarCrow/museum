import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IArtCard } from '../../models/art-card';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
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
  private page = new BehaviorSubject<number>(1);
  private category = new BehaviorSubject<string>('');
  private totalCount = new BehaviorSubject<number>(0);
  public totalCount$ = this.totalCount.asObservable();
  public amount$ = this.amount.asObservable();
  public page$ = this.page.asObservable();
  public search$ = this.search.asObservable();
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
    const category$ = this.category.asObservable();
    combineLatest([sort$, search$, amount$, page$, category$]).pipe(
      map(([sortQuery, searchQuery, amountNum, pageNum, category]) => {
        const url = this.buildUrl(sortQuery, searchQuery, amountNum, pageNum, category);
        return this.sendRequestToServer(url).subscribe(data => {
          this.artSubject.next(data);
        });
      })
    ).subscribe();
  }

  private buildUrl(sort: string, search: string, amount: number, page: number, category: string): string {
    let url = `${API_URL}?key=${API_KEY}&imgonly=true&q=${search}&s=${sort}&ps=${amount}&p=${page}`;
    console.log(category);
    if (category) {
      url += `&q=${category}`;
    }
    return url;
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

  public setCategory(category: string) {
    this.category.next(category);
  }

}
