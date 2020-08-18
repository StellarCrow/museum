import { Component } from '@angular/core';
import { ArtService } from '../../services/art/art.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-ordering',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  constructor(private artService: ArtService) {

  }

  onChange(event: MatSelectChange): void {
    this.artService.sort(event.value);
  }

}
