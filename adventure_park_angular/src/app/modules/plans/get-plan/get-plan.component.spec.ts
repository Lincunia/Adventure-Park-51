import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPlanComponent } from './get-plan.component';

describe('GetPlanComponent', () => {
  let component: GetPlanComponent;
  let fixture: ComponentFixture<GetPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
