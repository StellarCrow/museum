import { Component, Input, OnInit } from '@angular/core';
import { IArtCard } from '../../models/art-card';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {

  @Input() art: IArtCard;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, { minWidth: '60%', data: this.art });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
