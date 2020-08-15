import { Component, OnInit } from '@angular/core';
import { ArtObjectService } from '../../services/art-object/art-object.service';
import { ActivatedRoute } from '@angular/router';
import { IArtObject } from '../../models/art-object';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.scss']
})
export class ArtPageComponent implements OnInit {
  private id: string;
  private artObject: IArtObject = null;

  constructor(private artObjectService: ArtObjectService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.artObjectService.getFullObject(this.id).subscribe((data) => {
      this.artObject = data;
    });
  }

}
