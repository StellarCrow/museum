import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFavoritesButtonComponent } from './show-favorites-button.component';

describe('ShowFavoritesButtonComponent', () => {
  let component: ShowFavoritesButtonComponent;
  let fixture: ComponentFixture<ShowFavoritesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFavoritesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFavoritesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
