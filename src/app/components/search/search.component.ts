import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtService } from '../../services/art/art.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public formSearch: FormGroup;

  @Input() query: string;
  @Output() onSearch = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      query: [this.query, [Validators.maxLength(100)]]
    });
  }

  public onSubmit(): void {
    const query = this.formSearch.value.query;
    this.onSearch.emit(query);
  }

}
