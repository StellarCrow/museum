import { Component, EventEmitter, Output } from '@angular/core';
import { DEFAULT_COUNT_PER_PAGE } from '../../constants/constants';

@Component({
  selector: 'app-count-per-page',
  templateUrl: './count-per-page.component.html',
  styleUrls: ['./count-per-page.component.scss']
})
export class CountPerPageComponent {
  public numbers = [10, 50, 100];
  public selected = DEFAULT_COUNT_PER_PAGE;

  @Output() onChangeAmount = new EventEmitter<number>();

  public changeAmount(num: number): void {
    this.selected = num;
    this.onChangeAmount.emit(num);
  }
}
