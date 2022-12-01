import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairgroundsComponent } from './fairgrounds.component';

describe('FairgroundsComponent', () => {
  let component: FairgroundsComponent;
  let fixture: ComponentFixture<FairgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairgroundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
