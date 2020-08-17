import { Component, OnInit } from '@angular/core';
import { ArtObjectService } from '../../services/art-object/art-object.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IArtItem } from '../../models/art-item';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.scss']
})
export class ArtPageComponent implements OnInit {
  private id: string;
  public artObject: IArtItem;

  constructor(private artObjectService: ArtObjectService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.artObjectService.getFullObject(this.id).subscribe((data) => {
      this.artObject = data;
    }, error => {
      // this.router.navigate(null);
      console.log(error);
    });
  }

}
