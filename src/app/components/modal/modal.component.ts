import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IArtCard } from '../../models/art-card';
import { ArtObjectService } from '../../services/art-object/art-object.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public description: string;

  constructor(@Inject(MAT_DIALOG_DATA) public art: IArtCard,
              private artObjectService: ArtObjectService) {
  }

  ngOnInit(): void {
    this.artObjectService.getDescription(this.art.objectNumber).subscribe(data => {
      this.description = data || 'There is no description provided.';
    });
  }

}
