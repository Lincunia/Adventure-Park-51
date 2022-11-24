import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFairgroundComponent } from './create-fairground.component';

describe('CreateFairgroundComponent', () => {
  let component: CreateFairgroundComponent;
  let fixture: ComponentFixture<CreateFairgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFairgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFairgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
