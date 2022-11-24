import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFairgroundComponent } from './search-fairground.component';

describe('SearchFairgroundComponent', () => {
  let component: SearchFairgroundComponent;
  let fixture: ComponentFixture<SearchFairgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFairgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFairgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
