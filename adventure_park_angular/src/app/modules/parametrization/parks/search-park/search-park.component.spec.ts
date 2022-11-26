import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParkComponent } from './search-park.component';

describe('SearchParkComponent', () => {
  let component: SearchParkComponent;
  let fixture: ComponentFixture<SearchParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchParkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
