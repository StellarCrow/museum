import { Component, OnInit } from '@angular/core';
import { ArtService } from '../../services/art/art.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public search: string;
  public amount: number;

  constructor(private artService: ArtService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.artService.amount$.subscribe(data => {
      this.amount = data;
    });
    this.artService.search$.subscribe(data => {
      this.search = data;
    });
    this.activatedRoute.queryParams.subscribe(val => {
      this.artService.setCategory(val.category);
    });
  }

  public searchArts(query: string): void {
    this.artService.searchArt(query);
  }

  public sortArts(query: string): void {
    this.artService.sort(query);
  }

  public changeAmount(num: number): void {
    this.artService.setAmount(num);
  }

  public changePage(num: number): void {
    this.artService.setPage(num);
  }

}
