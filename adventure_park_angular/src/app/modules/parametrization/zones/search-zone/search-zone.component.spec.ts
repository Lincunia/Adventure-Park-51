import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZoneComponent } from './search-zone.component';

describe('SearchZoneComponent', () => {
  let component: SearchZoneComponent;
  let fixture: ComponentFixture<SearchZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
