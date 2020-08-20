import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEFAULT_COUNT_PER_PAGE } from '../../constants/constants';

@Component({
  selector: 'app-count-per-page',
  templateUrl: './count-per-page.component.html',
  styleUrls: ['./count-per-page.component.scss']
})
export class CountPerPageComponent implements OnInit {
  public numbers = [10, 50, 100];
  public selected = DEFAULT_COUNT_PER_PAGE;

  @Input() selectedNum: number;

  @Output() onChangeAmount = new EventEmitter<number>();

  ngOnInit(): void {
    this.selected = this.selectedNum;
  }

  public changeAmount(num: number): void {
    this.selected = num;
    this.onChangeAmount.emit(num);
  }
}
