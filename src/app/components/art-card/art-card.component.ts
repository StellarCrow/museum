import { Component, Input, OnInit } from '@angular/core';
import { IArtCard } from '../../models/art-card';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {

  @Input() art: IArtCard;

  constructor() {
  }

  ngOnInit(): void {
  }

}
