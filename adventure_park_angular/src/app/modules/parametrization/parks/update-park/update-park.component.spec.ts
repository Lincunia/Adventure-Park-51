import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkComponent } from './update-park.component';

describe('UpdateParkComponent', () => {
  let component: UpdateParkComponent;
  let fixture: ComponentFixture<UpdateParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
