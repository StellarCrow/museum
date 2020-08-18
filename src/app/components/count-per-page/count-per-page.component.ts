import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-count-per-page',
  templateUrl: './count-per-page.component.html',
  styleUrls: ['./count-per-page.component.scss']
})
export class CountPerPageComponent {
  public numbers = [10, 50, 100];

  @Output() onChangeAmount = new EventEmitter<number>();

  public changeAmount(num: number): void {
    this.onChangeAmount.emit(num);
  }
}
