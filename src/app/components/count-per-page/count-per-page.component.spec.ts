import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPerPageComponent } from './count-per-page.component';

describe('CountPerPageComponent', () => {
  let component: CountPerPageComponent;
  let fixture: ComponentFixture<CountPerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountPerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
