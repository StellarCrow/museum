import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtService } from '../../services/art/art.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public formSearch: FormGroup;

  constructor(private formBuilder: FormBuilder, private artService: ArtService) {
  }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      query: ['', [Validators.maxLength(100)]]
    });
  }

  public onSubmit(): void {
    const query = this.formSearch.value.query;
    this.artService.searchArt(query);
  }

}
