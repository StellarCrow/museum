import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {
  @Input() isInList: boolean;

  @Output() shouldAddToList = new EventEmitter<boolean>();

  public addToList(): void {
    this.isInList = !this.isInList;
    this.shouldAddToList.emit(this.isInList);
  }

}
