import { Component, OnInit } from '@angular/core';
import { ArtService } from '../../services/art/art.service';
import { Observable } from 'rxjs';
import { IArtCard } from '../../models/art-card';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent implements OnInit {
  public artList: Observable<IArtCard[]>;

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.artList = this.artService.arts$;
  }

}
