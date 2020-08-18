import { Component } from '@angular/core';
import { ArtService } from '../../services/art/art.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private artService: ArtService) {
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

}
