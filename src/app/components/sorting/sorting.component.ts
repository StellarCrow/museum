import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-ordering',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Output() onOrderChange = new EventEmitter<string>();

  onChange(event: MatSelectChange): void {
    this.onOrderChange.emit(event.value);
  }

}
