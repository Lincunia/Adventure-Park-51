import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFairgroundComponent } from './update-fairground.component';

describe('UpdateFairgroundComponent', () => {
  let component: UpdateFairgroundComponent;
  let fixture: ComponentFixture<UpdateFairgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFairgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFairgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
