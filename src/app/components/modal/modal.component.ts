import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IArtCard } from '../../models/art-card';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public art: IArtCard) {
  }

  ngOnInit(): void {
    console.log(this.art);
  }

}
