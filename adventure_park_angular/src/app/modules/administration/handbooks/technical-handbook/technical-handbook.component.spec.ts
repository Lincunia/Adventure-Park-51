import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalHandbookComponent } from './technical-handbook.component';

describe('TechnicalHandbookComponent', () => {
  let component: TechnicalHandbookComponent;
  let fixture: ComponentFixture<TechnicalHandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalHandbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
