import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent {
  @Input() category: string;
  @Input() tags: [string];
  @Input() materials: [string];
  @Input() dimensions: [{
    unit: string,
    type: string,
    value: string
  }];


}
