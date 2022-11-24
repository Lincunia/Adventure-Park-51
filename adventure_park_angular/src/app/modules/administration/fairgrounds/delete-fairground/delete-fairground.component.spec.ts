import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFairgroundComponent } from './delete-fairground.component';

describe('DeleteFairgroundComponent', () => {
  let component: DeleteFairgroundComponent;
  let fixture: ComponentFixture<DeleteFairgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFairgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFairgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
