import { Component, Input } from '@angular/core';
import { IArtObject } from '../../models/art-object';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  @Input() colors: [{
    percentage: number,
    hex: string
  }];
}
