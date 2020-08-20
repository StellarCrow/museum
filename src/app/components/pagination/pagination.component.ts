import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArtService } from '../../services/art/art.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public totalPages: number;
  public maxCount = 10;
  public paginationPage = [];
  public currentPage = 1;

  @Output() onChangePage = new EventEmitter<number>();

  constructor(private artService: ArtService) {
  }

  ngOnInit(): void {
    const count$ = this.artService.totalCount$;
    const amount$ = this.artService.amount$;
    const page$ = this.artService.page$;
    combineLatest([count$, amount$, page$]).pipe(
      map(([count, amount, page]) => {
        this.currentPage = page;
        this.totalPages = Math.floor(count / amount);
        this.changePaginationPage();
      })
    ).subscribe();
  }

  private changePaginationPage() {
    this.paginationPage = [];
    const diff = this.totalPages - this.currentPage + 1;
    const endIndex = diff > 10 ? (this.currentPage + this.maxCount) : this.totalPages + 1;
    for (let i = this.currentPage; i <= endIndex; i++) {
      this.paginationPage.push(i);
    }
  }

  public setPage(num: number): void {
    this.onChangePage.emit(num);
    this.currentPage = num;
  }

}
